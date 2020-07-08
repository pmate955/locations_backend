import Location from '../models/location';
import User from '../models/user';
import { index as commentIndex } from './comment';

interface CommentResponse {
  username: string;
  content: string;
  rating: number;
  created_at?: string;
}
export interface LocationResponse {
  id?: number;
  name: string;
  description: string;
  geoLocation: string;
  creatorUserId: number;
  creatorUserName: string;
  comments: Array<CommentResponse>;
  created_at?: string;
  updated_at?: string;  
}

export const show = (location: Location, creator: User, comments: Array<CommentResponse>): LocationResponse => {
  return {
    id: location.id,
    name: location.name,
    description: location.description,
    creatorUserId: location.creatorUserId,
    creatorUserName: creator.username,
    geoLocation: location.geoLocation,
    comments: commentIndex(comments),
    created_at: location.created_at,
    updated_at: location.updated_at
  }
};

// export const index = (locations: Array<Location>): Array<LocationResponse> => {
//   return locations.map((location: Location) => show(location));
// }