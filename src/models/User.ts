import { UserStatus } from "./Enums.js";
import { type Address } from "./Address.js";

export interface User {
  firstname: string;
  lastName: string;
  username: string;
  password: string;
  address: Address;
  email: string;
  phone: string;
  status: UserStatus;
}
