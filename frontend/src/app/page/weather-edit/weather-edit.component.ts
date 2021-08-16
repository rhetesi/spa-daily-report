import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Weather } from 'src/app/model/weather';
import { WeatherService } from 'src/app/service/weather.service';

@Component({
  selector: 'app-weather-edit',
  templateUrl: './weather-edit.component.html',
  styleUrls: ['./weather-edit.component.scss']
})
export class WeatherEditComponent implements OnInit {

  weather$: Observable<Weather> = this.ar.params.pipe(
    switchMap(params => this.weatherService.get(params.id))
  );

  constructor(
    private weatherService: WeatherService,
    private ar: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onSave(weather: Weather): void {
    this.weatherService.update(weather).subscribe(
      weather => this.router.navigate(['/', 'weather'])
    );
  }

}
