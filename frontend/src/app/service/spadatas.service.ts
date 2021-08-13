import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Spadatas } from '../model/spadatas';
import { BaseService } from './base.service';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class SpadatasService extends BaseService<Spadatas> {

  constructor(
    public config: ConfigService,
    public http: HttpClient,
  ) {
    super(config, http);
    this.entity = 'spadatas';
   }
}
