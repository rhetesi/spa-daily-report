import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Weather } from '../model/weather';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class WeatherService extends BaseService<Weather> {

  constructor(
    public http: HttpClient,
  ) {
    super(http);
    this.entity = 'weather';
   }
}
