import Location from "../models/location";
import { database } from "../../lib/database";
import { Request, Response, NextFunction } from "express";
import { QueryBuilder } from "knex";

export const authorization = (req: Request, res: Response, next: NextFunction) => {
  if(['admin'].includes(res.locals.user.role)) {
    next();
  } else {
    res.sendStatus(403);
  }
}

export const index = async (req: Request, res: Response) => {
  let query: QueryBuilder = database('locations').select();
  if (req.query.limit) {
    query = query.limit(parseInt(req.query.limit as string));
  }
  if (req.query.offset) {
    query = query.offset(parseInt(req.query.offset as string));
  }
  const locations: Array<Location> = await query;
  res.json(locations);
};

export const show = async (req: Request, res: Response) => {
  try {
    const location: Location = await database('locations').select().where({ id: req.params.id }).first();
    if (typeof location !== 'undefined') {
      res.json(location);
    } else {
      res.sendStatus(404);
    }
  } catch(error) {
    console.error(error);
    res.sendStatus(500);
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const location: Location = {
      name: req.body.name,
      description: req.body.description,
      geoLocation: req.body.geoLocation,
      creatorUserId: res.locals.user.id
    }
    await database('locations').insert(location);
    res.sendStatus(201);
  } catch(error) {
    console.error(error);
    res.sendStatus(500);
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const location: Location = await database('locations').select().where({ id: req.params.id }).first();
    if (location) {
      const newLocation: Partial<Location> = {
        name: req.body.name,
        description: req.body.description,
        geoLocation: req.body.geoLocation,
      }
      await database('locations').update(newLocation).where({ id: req.params.id });
      res.sendStatus(200);
    } else {
      res.sendStatus(404);
    }
  } catch(error) {
    console.error(error);
    res.sendStatus(500);
  }
}

export const destroy = async (req: Request, res: Response) => {
  try {
    const location: Location = await database('locations').select().where({ id: req.params.id }).first();
    if (location) {
      await database('locations').delete().where({ id: req.params.id });
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }
  } catch(error) {
    console.error(error);
    res.sendStatus(500);
  }
};
