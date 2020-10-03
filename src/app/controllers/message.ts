import { QueryBuilder } from "knex";
import { database } from "../../lib/database";
import { Request, Response } from "express";
import { Message, ContentType } from "../models/message";
import { show, MessageResponse } from "../serializers/message";
import User from "../models/user";

export const broadcastMessages = async (req: Request, res: Response): Promise<void> => {
  let query: QueryBuilder = database('messages').select().where({isBroadcast: true}).orderBy('created_at', 'desc');
  if (req.query.limit) {
    query = query.limit(parseInt(req.query.limit as string));
  }
  if (req.query.offset) {
    query = query.offset(parseInt(req.query.offset as string));
  }
  const messages: Array<Message> = await query;
  const outMessages: Array<MessageResponse> = [];
  for(let message of messages) {
    const creator: User = await database('users').select().where({id: message.creatorId}).first();
    outMessages.push(show(message, creator));
  }
  res.json(outMessages);
};

export const createBroadcastMessage = async (body: string, creator: User): Promise<MessageResponse> => {
  const message: Message = {
    creatorId: creator.id,
    body: body,
    contentType: ContentType.TEXT,
    isBroadcast: true,
  };
  const newMessageId = await database('messages').insert(message);
  const newMessage: Message = await database('messages').select().where({id: newMessageId[0]}).first();
  return show(newMessage, creator);
}