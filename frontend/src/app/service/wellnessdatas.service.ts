import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Wellnessdatas } from '../model/wellnessdatas';
import { BaseService } from './base.service';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class WellnessdatasService extends BaseService<Wellnessdatas> {

  constructor(
    public config: ConfigService,
    public http: HttpClient,
  ) {
    super(config, http);
    this.entity = 'wellnessdatas';
   }
}
