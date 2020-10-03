import { ContentType, Message } from "../models/message";
import User from "../models/user";


export interface MessageResponse {
  id: number;
  creatorId: number;
  creatorName: string;
  recipientId?: number;
  body: string;
  contentType: ContentType
};

export const show = (message: Message, creator: User): MessageResponse => {
  const response: MessageResponse = {
    id: message.id,
    creatorId: message.creatorId,
    creatorName: creator.username,
    body: message.body,
    contentType: message.contentType,
    recipientId: message.recipientId
  };
  return response;
}
