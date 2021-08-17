import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { FieldBase } from 'src/app/areus-form/model/field-base';
import { InputField } from 'src/app/areus-form/model/input-field';
import { Spadatas } from 'src/app/model/spadatas';
import { SpadatasService } from 'src/app/service/spadatas.service';

@Component({
  selector: 'app-spadatas-edit',
  templateUrl: './spadatas-edit.component.html',
  styleUrls: ['./spadatas-edit.component.scss']
})
export class SpadatasEditComponent implements OnInit {

  spadatas$: Observable<Spadatas> = this.ar.params.pipe(
    // switchMap(params => this.spadatasService.get(params.id))
    switchMap(params => {
      if (params.id === '') {
        return of(new Spadatas())
      }
      return this.spadatasService.get(params.id);
    })
  );
  spadatas: Spadatas = new Spadatas();
  fields: FieldBase<any>[] = [];
  showForm: boolean = false;

  constructor(
    private spadatasService: SpadatasService,
    private ar: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.spadatas$.subscribe(
      spadatas => {
        this.spadatas = spadatas;
        this.setForm();
        this.showForm = true;
      }
    )
  }

  setForm(): void {
    this.fields = [
      new InputField({ key: '_id', label: '', type: 'hidden', value: this.spadatas._id }),
      new InputField({key: 'time', label: 'Dátum és idő', type: 'date', value: this.spadatas.time as unknown as string, validators: [Validators.required] }),
      new InputField({ key: 'sumOfGuests', label: 'Vendégek száma', type: 'text', value: this.spadatas.sumOfGuests as number, validators: [Validators.required] }),
      new InputField({ key: 'sumOfSauna', label: 'Szauna létszám', type: 'text', value: this.spadatas.sumOfSauna as number, validators: [Validators.required] }),
      new InputField({ key: 'dataLogger', label: 'Rögzítette', type: 'text', value: this.spadatas.dataLogger as unknown as string }),
    ]
  }

  onSave(spadatas: Spadatas): void {
    if (spadatas._id === null) {
      this.spadatasService.create(spadatas).subscribe(
        () => this.router.navigate(['/', 'spadatas'])
      );
    } else {
      this.spadatasService.update(spadatas).subscribe(
        spadatas => this.router.navigate(['/', 'spadatas'])
      );
    }
  }

}
