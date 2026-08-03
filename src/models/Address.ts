import type { IAddress } from "../interfaces/IAddress.js";

export class Address implements IAddress {
  constructor(
    public line1: string,
    public line2: string,
    public city: string,
    public state: string,
    public postalCode: string,
    public country: string,
  ) {}
}
