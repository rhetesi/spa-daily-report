import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Spadatas } from 'src/app/model/spadatas';
import { SpadatasService } from 'src/app/service/spadatas.service';

@Component({
  selector: 'app-spadatas-edit',
  templateUrl: './spadatas-edit.component.html',
  styleUrls: ['./spadatas-edit.component.scss']
})
export class SpadatasEditComponent implements OnInit {

  spadatas$: Observable<Spadatas> = this.ar.params.pipe(
    switchMap(params => this.spadatasService.get(params.id))
  );

  constructor(
    private spadatasService: SpadatasService,
    private ar: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }

}
