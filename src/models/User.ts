import type { IAddress } from "../interfaces/IProfile.js";
import type { IUser } from "../interfaces/IUser.js";
import type { UserStatus } from "./Enums.js";

export class User implements IUser {
  constructor(
    public firstname: string,
    public lastName: string,
    public username: string,
    public password: string,
    public address: IAddress,
    public email: string,
    public phone: string,
    public status: UserStatus,
  ) {}
}
