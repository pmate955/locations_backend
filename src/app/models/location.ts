export default interface Location {
  id?: number;
  name: string;
  description: string;
  geoLocation: string;
  creatorUserId: number;
  created_at?: string;
  updated_at?: string;  
}