import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { FieldBase } from 'src/app/areus-form/model/field-base';
import { InputField } from 'src/app/areus-form/model/input-field';
import { Weather } from 'src/app/model/weather';
import { WeatherService } from 'src/app/service/weather.service';

@Component({
  selector: 'app-weather-edit',
  templateUrl: './weather-edit.component.html',
  styleUrls: ['./weather-edit.component.scss']
})
export class WeatherEditComponent implements OnInit {

  weather$: Observable<Weather> = this.ar.params.pipe(
    // switchMap(params => this.weatherService.get(params.id))
    switchMap(params => {
      if (params.id === '') {
        return of(new Weather())
      }
      return this.weatherService.get(params.id);
    })
  );
  weather: Weather = new Weather();
  fields: FieldBase<any>[] = [];
  showForm: boolean = false;

  constructor(
    private weatherService: WeatherService,
    private ar: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.weather$.subscribe(
      weather => {
        this.weather = weather;
        this.setForm();
        this.showForm = true;
      }
    )
  }

  setForm(): void {
    this.fields = [
      new InputField({ key: '_id', label: '', type: 'hidden', value: this.weather._id }),
      new InputField({ key: 'time', label: 'Dátum és idő', type: 'date', value: this.weather.time as unknown as string, validators: [Validators.required] }),
      new InputField({ key: 'waterInside', label: 'Belső vízhőfok', type: 'number', value: this.weather.waterInside as unknown as number, validators: [Validators.required] }),
      new InputField({ key: 'waterOutside', label: 'Külső vízhőfok', type: 'number', value: this.weather.waterOutside as unknown as number, validators: [Validators.required] }),
      new InputField({ key: 'airMin', label: 'Levegő minimum hőfoka', type: 'number', value: this.weather.airMin as unknown as number }),
      new InputField({ key: 'airMax', label: 'Levegő maximum hőfoka', type: 'number', value: this.weather.airMax as unknown as number }),
      new InputField({key: 'weatherCondition', label: 'Időjárás', type: 'text', value: this.weather.weatherCondition, validators: [Validators.required]}),
      new InputField({ key: 'dataLogger', label: 'Rögzítette', type: 'text', value: this.weather.dataLogger as unknown as string }),
    ]
  }

  onSave(weather: Weather): void {

    if (weather._id === null) {
      this.weatherService.create(weather).subscribe(
      () => this.router.navigate(['/', 'weather'])
      );
    } else {
      this.weatherService.update(weather).subscribe(
      weather => this.router.navigate(['/', 'weather'])
      );
    }
  }

}
