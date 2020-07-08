import User from "../models/user";
import { Roles } from "../models/user";
import { database } from "../../lib/database";
import { Request, Response } from "express";
import * as bcrypt from 'bcrypt';
import { QueryBuilder } from "knex";
import * as userSerializer from '../serializers/user';

export const index = async (req: Request, res: Response) => {
  let query: QueryBuilder = database('users').select();
  if (req.query.limit) {
    query = query.limit(parseInt(req.query.limit as string));
  }
  if (req.query.offset) {
    query = query.offset(parseInt(req.query.offset as string));
  }
  const users: Array<User> = await query;
  res.json(userSerializer.index(users));
};

export const show = async (req: Request, res: Response) => {
  try {
    const user: User = await database('users').select().where({ id: req.params.id }).first();
    if (typeof user !== 'undefined') {
      res.json(userSerializer.show(user));
    } else {
      res.sendStatus(404);
    }
  } catch(error) {
    console.error(error);
    res.sendStatus(500);
  }
};

export const me = async (req: Request, res: Response) => {
  try {
    if (typeof res.locals.user !== 'undefined') {
      res.json(res.locals.user);
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
    const encryptedPassword = bcrypt.hashSync(req.body.password, 10);
    const user: User = {
      username: req.body.username,
      email: req.body.email,
      passwordHash: encryptedPassword,
      role: Roles.USER,
      geoLocation: req.body.geoLocation
    }
    await database('users').insert(user);
    res.status(201).send({created: 'ok'});
  } catch(error) {
    if(error.sqlMessage.includes('users_username_unique')) {
      res.status(400).send({ message: 'username in use'});
    } else if(error.sqlMessage.includes('users_email_unique')){
      res.status(400).send({ message: 'email in use'});
    } else {
      res.sendStatus(500);
    }
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const user: User = await database('users').select().where({ id: req.params.id }).first();
    if (user) {
      const newUser: Partial<User> = {
        username: req.body.username,
        email: req.body.email,
        geoLocation: req.body.geoLocation
      }
      await database('users').update(newUser).where({ id: req.params.id });
      res.sendStatus(200);
    } else {
      res.sendStatus(404);
    }
  } catch(error) {
    console.error(error);
    res.sendStatus(400);
  }
};

export const updateMe = async (req: Request, res: Response) => {
  try {
    const user: User = await database('users').select().where({ id: res.locals.user.id }).first();
    if (user) {
      const newUser: Partial<User> = {
        username: req.body.username,
        email: req.body.email,
        geoLocation: req.body.geoLocation
      }
      await database('users').update(newUser).where({ id: res.locals.user.id });
      res.sendStatus(200);
    } else {
      res.sendStatus(404);
    }
  } catch(error) {
    console.error(error);
    res.sendStatus(400);
  }
};


export const destroy = async (req: Request, res: Response) => {
  try {
    const user: User = await database('users').select().where({ id: req.params.id }).first();
    if (user) {
      await database('users').delete().where({ id: req.params.id });
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }
  } catch(error) {
    console.error(error);
    res.sendStatus(500);
  }
}
export const destroyMe = async (req: Request, res: Response) => {
  try {
    if (res.locals.user &&  bcrypt.compareSync(req.body.password, res.locals.user.passwordHash)) {
      await database('users').delete().where({ id: res.locals.user.id });
      res.sendStatus(204);
    } else {
      console.log(bcrypt.compareSync(req.body.password, res.locals.user.passwordHash))
      res.sendStatus(404);
    }
  } catch(error) {
    console.error(error);
    res.sendStatus(500);
  }
}
