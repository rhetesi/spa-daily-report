import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Spareport } from 'src/app/model/spareport';
import { ConfigService, ITableColumn } from 'src/app/service/config.service';
import { SpareportService } from 'src/app/service/spareport.service';

@Component({
  selector: 'app-spareport',
  templateUrl: './spareport.component.html',
  styleUrls: ['./spareport.component.scss']
})
export class SpareportComponent implements OnInit {

  tableColumns: ITableColumn[] = this.config.spareportColumns;
  list$: Observable<Spareport[]> = this.spareportService.getAll();

  constructor(
    private config: ConfigService,
    private spareportService: SpareportService,
  ) { }

  ngOnInit(): void {
  }

}
