export default interface Comment {
  id?: number;
  userId: number;
  locationId: number;
  content: string;
  rating: number;
  created_at?: string;
  updated_at?: string;  
}