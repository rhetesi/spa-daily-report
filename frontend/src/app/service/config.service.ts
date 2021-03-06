import { Injectable } from '@angular/core';

export interface ITableColumn {
  title: string;
  key: string;
  hidden?: boolean;
  // outputTransform?: any;
  htmlOutput?: any;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  public readonly apiUrl: string = 'http://localhost:3000/';

  userColumns: ITableColumn[] = [
    { key: "_id", title: "#", hidden: true },
    { key: "lastName", title: "Vezetéknév" },
    { key: "firstName", title: "Keresztnév" },
    { key: "email", title: "Email" },
    { key: "address", title: "Cím" },
    { key: "role", title: "Jogosultság" },
    { key: "active", title: "Aktív?", htmlOutput: ConfigService.activeSign }
  ];

  spadatasColumns: ITableColumn[] = [
    { key: "_id", title: "#", hidden: true },
    { key: "time", title: "Dátum és idő" },
    { key: "sumOfGuests", title: "Vendégek száma" },
    { key: "sumOfSauna", title: "Szaunavilág létszám" },
    { key: "dataLogger", title: "Rögzítette" }
  ];

  spareportColumns: ITableColumn[] = [
    { key: "_id", title: "#", hidden: true },
    { key: "time", title: "Dátum és idő" },
    { key: "report", title: "Feljegyzés" },
    { key: "dataLogger", title: "Rögzítette" }
  ];

  weatherColumns: ITableColumn[] = [
    { key: "_id", title: "#", hidden: true },
    { key: "time", title: "Dátum és idő" },
    { key: "waterInside", title: "Vízhőfok bent", },
    { key: "waterOutside", title: "Vízhőfok kint", },
    { key: "airMin", title: "Levegő minimum hőfok", },
    { key: "airMax", title: "Levegő maximum hőfok", },
    // { key: "waterInside", title: "Vízhőfok bent", outputTransform: (v: number) => `${v} °C` },
    // { key: "waterOutside", title: "Vízhőfok kint", outputTransform: (v: number) => `${v} °C` },
    // { key: "airMin", title: "Levegő minimum hőfok", outputTransform: (v: number) => `${v} °C` },
    // { key: "airMax", title: "Levegő maximum hőfok", outputTransform: (v: number) => `${v} °C` },
    { key: "weatherCondition", title: "Időjárás" },
    { key: "dataLogger", title: "Rögzítette" }
  ];

  wellnessdatasColumns: ITableColumn[] = [
    { key: "_id", title: "#", hidden: true },
    { key: "time", title: "Dátum és idő" },
    { key: "massage", title: "Masszázs" },
    { key: "pediAndManiCure", title: "Mani- és pedikűr" },
    { key: "cosmetics", title: "Kozmetika" },
    { key: "medicaExamination", title: "Orvosi vizsgálat" },
    { key: "mudSale", title: "Vödrös iszap" },
    { key: "mudTreatment", title: "Iszappakolás" },
    { key: "weightBath", title: "Súlyfürdő" },
    { key: "phisioTherapy", title: "Fizikóterápia" },
    { key: "dataLogger", title: "Rögzítette" }
  ];

  constructor() { }

  // static activeSign(v: boolean): string {
  //   const icon: string = v ? 'fa-check' : 'fa-times';
  //   return `<i class="fas ${icon}"></i>`;
  // }

  static activeSign(v: boolean): string {
    const icon: string = v ? '<i class="fas fa-check"></i>' : '';
    return icon;
  }
}
