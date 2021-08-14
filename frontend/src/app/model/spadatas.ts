import { User } from "./user";

export class Spadatas {
  _id: string = '';
  time: Date = new Date();
  sumOfGuests: number = 0;
  sumOfSauna: number = 0;
  dataLogger: User = new User();
}
