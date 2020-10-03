export enum ContentType {
  TEXT='text',
  URL='url',
  FILE='file'
};

export interface Message {
  id?: number;
  creatorId: number;
  recipientId?: number;
  isBroadcast: boolean;
  body: string;
  contentType: ContentType;
  created_at?: string;
  updated_at?: string;
};
