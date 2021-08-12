import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Wellnessdatas } from '../model/wellnessdatas';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class WellnessdatasService extends BaseService<Wellnessdatas> {

  constructor(
    public http: HttpClient,
  ) {
    super(http);
    this.entity = 'wellnessdatas';
   }
}
