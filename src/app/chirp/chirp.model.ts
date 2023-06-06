import {User} from '../user/user.model';

export interface Chirp {
  user: User;
  message: string;
}
