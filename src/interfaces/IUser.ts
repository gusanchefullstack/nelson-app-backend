import { UserStatus } from "../models/Enums.js";
import { type IAddress } from "./IAddress.js";

export interface IUser {
  firstname: string;
  lastName: string;
  username: string;
  password: string;
  address: IAddress;
  email: string;
  phone: string;
  status: UserStatus;
}
