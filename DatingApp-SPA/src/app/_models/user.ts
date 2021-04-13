import { Photo } from './photo';

export interface User {
  userID: number;
  username: string;
  knownAs: string;
  age: number;
  gender: string;
  created: Date;
  photoURL: string;
  city: string;
  country: string;
  interests?: string;
  introduction?: string;
  lookingFor?: string;
  photos?: Photo[];
}
