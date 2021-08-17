import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Weather } from 'src/app/model/weather';
import { ConfigService, ITableColumn } from 'src/app/service/config.service';
import { WeatherService } from 'src/app/service/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  tableColumns: ITableColumn[] = this.config.weatherColumns;
  list$: Observable<Weather[]> = this.weatherService.getAll();
  entity: string = 'weather';

  constructor(
    private config: ConfigService,
    private weatherService: WeatherService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSelectOne(weather: Weather): void {
    this.router.navigate(['/', 'weather', 'edit', weather._id]);
  }

}
