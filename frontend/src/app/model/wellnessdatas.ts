import { User } from "./user";

export class Wellnessdatas {
  _id: string = '';
  date: Date = new Date();
  massage: number = 0;
  pediAndManiCure: number = 0;
  cosmetics: number = 0;
  medicaExamination: number = 0;
  mudSale: number = 0;
  mudTreatment: number = 0;
  weightBath: number = 0;
  phisioTherapy: number = 0;
  dataLogger: User = new User();
}
