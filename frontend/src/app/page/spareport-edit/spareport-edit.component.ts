import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { FieldBase } from 'src/app/areus-form/model/field-base';
import { InputField } from 'src/app/areus-form/model/input-field';
import { Spareport } from 'src/app/model/spareport';
import { SpareportService } from 'src/app/service/spareport.service';

@Component({
  selector: 'app-spareport-edit',
  templateUrl: './spareport-edit.component.html',
  styleUrls: ['./spareport-edit.component.scss']
})
export class SpareportEditComponent implements OnInit {

  spareport$: Observable<Spareport> = this.ar.params.pipe(
    switchMap(params => this.spareportService.get(params.id))
  );
  spareport: Spareport = new Spareport();
  fields: FieldBase<any>[] = [];
  showForm: boolean = false;

  constructor(
    private spareportService: SpareportService,
    private ar: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.spareport$.subscribe(
      spareport => {
        this.spareport = spareport;
        this.setForm();
        this.showForm = true;
      }
    )
  }

  setForm(): void {
    this.fields = [
      new InputField({ key: '_id', label: '', type: 'hidden', value: this.spareport._id }),
      new InputField({key: 'time', label: 'Dátum és idő', type: 'date', value: this.spareport.time as unknown as string}),
      new InputField({ key: 'report', label: 'Napi események', type: 'text', value: this.spareport.report as string }),
      new InputField({ key: 'dataLogger', label: 'Rögzítette', type: 'text', value: this.spareport.dataLogger as unknown as string }),
    ]
  }

  onSave(spareport: Spareport): void {
    this.spareportService.update(spareport).subscribe(
      spareport => this.router.navigate(['/', 'spareport'])
    );
  }

}
