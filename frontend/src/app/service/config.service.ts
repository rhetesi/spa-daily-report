import { Injectable } from '@angular/core';

export interface ITableColumn {
  title: string;
  key: string;
  hidden?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  public readonly apiUrl: string = 'http://localhost:3000/';

  userColumns: ITableColumn[] = [
    {key: "_id", title: "#"},
    {key: "firstName", title: "First Name"},
    {key: "lastName", title: "Last Name"},
    {key: "email", title: "Email"},
    {key: "address", title: "Address"},
    {key: "role", title: "Role"},
    {key: "active", title: "Active"}
  ];


    /**_id: string = '';
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  address: string = '';
  role: number = 0;
  active: boolean = true; */

  constructor() { }
}
