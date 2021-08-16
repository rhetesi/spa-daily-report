import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Wellnessdatas } from 'src/app/model/wellnessdatas';
import { WellnessdatasService } from 'src/app/service/wellnessdatas.service';

@Component({
  selector: 'app-wellness-edit',
  templateUrl: './wellness-edit.component.html',
  styleUrls: ['./wellness-edit.component.scss']
})
export class WellnessEditComponent implements OnInit {

  wellnessdatas$: Observable<Wellnessdatas> = this.ar.params.pipe(
    switchMap(params => this.wellnessdatasService.get(params.id))
  );

  constructor(
    private wellnessdatasService: WellnessdatasService,
    private ar: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onSave(wellnessdatas: Wellnessdatas): void {
    this.wellnessdatasService.update(wellnessdatas).subscribe(
      wellnessdatas => this.router.navigate(['/', 'wellness'])
    );
  }

}
