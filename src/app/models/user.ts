export enum Roles {
  USER = 'user',
  ADMIN = 'admin'
}

export default interface User {
  id?: number;
  username: string;
  email: string;
  passwordHash: string;
  role: Roles;
  geoLocation?: string;
  created_at?: string;
  updated_at?: string;  
}