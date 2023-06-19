import { User } from '../user';

export type UserId = number;
export type ChirpId = number;
export interface UserProfile extends User {
  bannerpic: string;
  follower: UserId[];
  following: UserId[];
  likes: ChirpId[];
  url: string;
  profiletext: string;
  joindate: string;
}
