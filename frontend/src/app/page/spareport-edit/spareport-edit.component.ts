import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
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

  constructor(
    private spareportService: SpareportService,
    private ar: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onSave(spareport: Spareport): void {
    this.spareportService.update(spareport).subscribe(
      spareport => this.router.navigate(['/', 'spareport'])
    );
  }

}