import {ChirpInfo} from '../chirp/chirp.model';
import {User} from '../user/user.model';

export interface UserProfile extends User {
  follower: User[];
  likes: ChirpInfo[];
}
