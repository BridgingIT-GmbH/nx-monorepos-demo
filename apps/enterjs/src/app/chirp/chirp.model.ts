import { User } from '../user';

export type ChirpId = number;

export interface Chirp {
  id: ChirpId;
  user: User;
  message: string;
  timestamp: Date;
}
