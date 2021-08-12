import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Spadatas } from '../model/spadatas';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class SpadatasService extends BaseService<Spadatas> {

  constructor(
    public http: HttpClient,
  ) {
    super(http);
    this.entity = 'spadatas';
   }
}
