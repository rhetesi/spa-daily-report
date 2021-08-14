import { User } from "./user";

export class Spareport {
  _id: string = '';
  time: Date = new Date();
  report: string = '';
  dataLogger: User = new User();
}
