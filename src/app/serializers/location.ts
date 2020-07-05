import Location from "../models/location";
import User from "../models/user";

export interface LocationSerializer {
  id?: number;
  name: string;
  description: string;
  geoLocation: string;
  creatorUserId: number;
  creatorUserName: string;
  created_at?: string;
  updated_at?: string;  
}

export const show = (location: Location, creator: User): LocationSerializer => {
  return {
    id: location.id,
    name: location.name,
    description: location.description,
    creatorUserId: location.creatorUserId,
    creatorUserName: creator.username,
    geoLocation: location.geoLocation,
    created_at: location.created_at,
    updated_at: location.updated_at
  }
};

// export const index = (locations: Array<Location>): Array<LocationSerializer> => {
//   return locations.map((location: Location) => show(location));
// }