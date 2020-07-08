import Comment from "../models/comment";
import { Request, Response, NextFunction } from "express";
import { database } from "../../lib/database";

export const create = async (req: Request, res: Response) => {
  try {
    const comment: Comment = {
     userId: res.locals.user.id,
     locationId: req.body.locationId,
     content: req.body.content,
     rating: req.body.rating
    }
    await database('comments').insert(comment);
    res.status(201).send({created: 'ok'});
  } catch(error) {
    res.sendStatus(500);
  }
};