import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Spareport } from '../model/spareport';
import { BaseService } from './base.service';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class SpareportService extends BaseService<Spareport> {

  constructor(
    public config: ConfigService,
    public http: HttpClient,
  ) {
    super(config, http);
    this.entity = 'spareport';
   }
}
