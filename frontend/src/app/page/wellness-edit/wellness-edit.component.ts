import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { FieldBase } from 'src/app/areus-form/model/field-base';
import { InputField } from 'src/app/areus-form/model/input-field';
import { Wellnessdatas } from 'src/app/model/wellnessdatas';
import { WellnessdatasService } from 'src/app/service/wellnessdatas.service';

@Component({
  selector: 'app-wellness-edit',
  templateUrl: './wellness-edit.component.html',
  styleUrls: ['./wellness-edit.component.scss']
})
export class WellnessEditComponent implements OnInit {

  wellnessdatas$: Observable<Wellnessdatas> = this.ar.params.pipe(
    // switchMap(params => this.wellnessdatasService.get(params.id))
    switchMap(params => {
      if (params.id === '') {
        return of(new Wellnessdatas())
      }
      return this.wellnessdatasService.get(params.id);
    })
  );
  wellnessdatas: Wellnessdatas = new Wellnessdatas();
  fields: FieldBase<any>[] = [];
  showForm: boolean = false;

  constructor(
    private wellnessdatasService: WellnessdatasService,
    private ar: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.wellnessdatas$.subscribe(
      wellnessdatas => {
        this.wellnessdatas = wellnessdatas;
        this.setForm();
        this.showForm = true;
      }
    )
  }

  setForm(): void {
    this.fields = [
      new InputField({ key: '_id', label: '', type: 'hidden', value: this.wellnessdatas._id }),
      new InputField({ key: 'time', label: 'Dátum és idő', type: 'date', value: this.wellnessdatas.time as unknown as string, validators: [Validators.required] }),
      new InputField({ key: 'massage', label: 'Masszázsok', type: 'number', value: this.wellnessdatas.massage as unknown as number, validators: [Validators.required] }),
      new InputField({ key: 'pediAndManiCure', label: 'Manikűr és pedikűr', type: 'number', value: this.wellnessdatas.pediAndManiCure as unknown as number }),
      new InputField({ key: 'cosmetics', label: 'Kozmetika', type: 'number', value: this.wellnessdatas.cosmetics as unknown as number }),
      new InputField({ key: 'medicalExamination', label: 'Orvosi vizsgálat', type: 'number', value: this.wellnessdatas.medicaExamination as unknown as number }),
      new InputField({ key: 'mudSale', label: 'Vödrös iszap', type: 'number', value: this.wellnessdatas.mudSale as unknown as number }),
      new InputField({ key: 'mudTreatment', label: 'Iszapkezelés', type: 'number', value: this.wellnessdatas.mudTreatment as unknown as number }),
      new InputField({ key: 'weightBath', label: 'Súlyfürdő', type: 'number', value: this.wellnessdatas.weightBath as unknown as number }),
      new InputField({ key: 'phisioTherapy', label: 'Fizikóterápia', type: 'number', value: this.wellnessdatas.phisioTherapy as unknown as number }),
      new InputField({ key: 'dataLogger', label: 'Rögzítette', type: 'text', value: this.wellnessdatas.dataLogger as unknown as string }),
    ]

  }

  onSave(wellnessdatas: Wellnessdatas): void {
    if (wellnessdatas._id === null) {
      this.wellnessdatasService.create(wellnessdatas).subscribe(
      () => this.router.navigate(['/', 'wellness'])
      );
    } else {
      this.wellnessdatasService.update(wellnessdatas).subscribe(
      wellnessdatas => this.router.navigate(['/', 'wellness'])
      );
    }
  }

}
