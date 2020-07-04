import User from "../models/user";

export interface UserSerializer {
  id?: number;
  username: string;
  email: string;
  role: string;
  geoLocation?: string;
  created_at?: string;
  updated_at?: string;  
}

export const show = (user: User): UserSerializer => {
  return {
    id: user.id,
    username: user.username,
    email: user.email,
    role: user.role,
    geoLocation: user.geoLocation,
    created_at: user.created_at,
    updated_at: user.updated_at
  }
};

export const index = (users: Array<User>): Array<UserSerializer> => {
  return users.map((user: User) => show(user));
}