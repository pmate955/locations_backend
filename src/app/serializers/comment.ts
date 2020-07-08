import Comment from "../models/comment";
import * as moment from 'moment';

interface CommentResponse {
  username: string;
  content: string;
  rating: number;
  created_at?: string;
}

export const show = (comment: CommentResponse):CommentResponse => {
  return {
    username: comment.username,
    content: comment.content,
    rating: comment.rating,
    created_at: moment(comment.created_at).format('YYYY-MM-DD HH:mm')
  }
}

export const index = (comments: Array<CommentResponse>): Array<CommentResponse> => {
  return comments.map((comment) => show(comment));
}