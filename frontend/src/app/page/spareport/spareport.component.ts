import { Component, OnInit } from '@angular/core';
import { ConfigService, ITableColumn } from 'src/app/service/config.service';

@Component({
  selector: 'app-spareport',
  templateUrl: './spareport.component.html',
  styleUrls: ['./spareport.component.scss']
})
export class SpareportComponent implements OnInit {

  tableColumns: ITableColumn[] = this.config.spareportColumns;

  constructor(
    private config: ConfigService,
  ) { }

  ngOnInit(): void {
  }

}
