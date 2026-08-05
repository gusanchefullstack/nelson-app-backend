import { UserStatus } from "../models/Enums.js";
import { type IProfile } from "./IProfile.js";

export interface IUser {
  username: string;
  password: string;
  profile: IProfile;
  status: UserStatus;
}
