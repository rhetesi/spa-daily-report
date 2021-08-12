import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Spareport } from '../model/spareport';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class SpareportService extends BaseService<Spareport> {

  constructor(
    public http: HttpClient,
  ) {
    super(http);
    this.entity = 'spareport';
   }
}
