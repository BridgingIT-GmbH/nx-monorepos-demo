import {User} from '../user/user.model';

export interface ChirpInfo {
  id: number;
}

export interface Chirp extends ChirpInfo {
  user: User;
  message: string;
  timestamp: Date;
}

