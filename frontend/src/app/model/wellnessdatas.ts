import { User } from "./user";

export class Wellnessdatas {
  _id: string = '';
  date: Date = new Date();
  sumOfGuests: number = 0;
  dataLogger: User = new User();
}
