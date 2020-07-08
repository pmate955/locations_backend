import Location from "../models/location";
import { database } from "../../lib/database";
import { Request, Response, NextFunction } from "express";
import { QueryBuilder } from "knex";
import * as locationSerializer from '../serializers/location';
import User from "../models/user";

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

export const userLocations = async (req: Request, res: Response) => {
  let query: QueryBuilder = database('locations').select().where({ creatorUserId: res.locals.user.id });
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
    const location: Location = await database('locations').select().where({ 'locations.id': req.params.id }).first();
    if (typeof location !== 'undefined') {
      const creator: User = await database('users').select().where({id: location.creatorUserId}).first();
      const comments: Array<any> = await database('comments').select(['comments.rating', 'comments.content', 'comments.created_at', 'users.username']).join('users', 'comments.userId', '=', 'users.id').where({ 'comments.locationId': req.params.id });
      res.json(locationSerializer.show(location, creator, comments));
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
