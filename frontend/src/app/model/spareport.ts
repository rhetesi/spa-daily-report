import { User } from "./user";

export class Spareport {
  _id: string = '';
  date: Date = new Date();
  report: string = '';
  dataLogger: User = new User();
}
