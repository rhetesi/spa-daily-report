import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Wellnessdatas } from 'src/app/model/wellnessdatas';
import { ConfigService, ITableColumn } from 'src/app/service/config.service';
import { WellnessdatasService } from 'src/app/service/wellnessdatas.service';

@Component({
  selector: 'app-wellness',
  templateUrl: './wellness.component.html',
  styleUrls: ['./wellness.component.scss']
})
export class WellnessComponent implements OnInit {

  tableColumns: ITableColumn[] = this.config.wellnessdatasColumns;
  list$: Observable<Wellnessdatas[]> = this.wellnessdatasService.getAll();

  constructor(
    private config: ConfigService,
    private wellnessdatasService: WellnessdatasService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onSelectOne(wellness: Wellnessdatas): void {
    this.router.navigate(['/', 'wellness', 'edit', wellness._id]);
  }

}
