import * as jwt from "jsonwebtoken";
import User from "../app/models/user";
import { database } from "./database";
import { createBroadcastMessage } from "../app/controllers/message";

export const initSocket = (http) => {

  const io = require('socket.io')(http, {serveClient: false});
  
  io.use(async (socket, next) => {
    try {
      const token: string = socket.handshake.query.token;
      const info = jwt.verify(token, process.env.JWT_SECRET);
      const userId: number =  info.userId;
      const user: User = await database('users').where({ id: userId }).first();
      if(!user) {
        next(new Error('Authentication error'));
      }
      socket.decodedUser = user;
      next();
    } catch(err) {
      next(new Error('Authentication error'));
    }    
  }).on('connection', (socket) => {
    
    socket.join('common room');

    socket.on('new-message', async (message) => {
      const dbMessage = await createBroadcastMessage(message.body, socket.decodedUser);
      io.in('common room').emit('new-message', dbMessage);
    });
    
    socket.on('error', function (err) {
      console.log(err);
    });
    
  });
}