import { User } from "./user";

export class Weather {
  _id: string = '';
  time: Date = new Date();
  waterInside: number = 0;
  waterOutside: number = 0;
  airMin: number = 0;
  airMax: number = 0;
  weatherCondition: string = '';
  dataLogger: User = new User();
}
