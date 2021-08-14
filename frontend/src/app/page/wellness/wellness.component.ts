import { Component, OnInit } from '@angular/core';
import { ConfigService, ITableColumn } from 'src/app/service/config.service';

@Component({
  selector: 'app-wellness',
  templateUrl: './wellness.component.html',
  styleUrls: ['./wellness.component.scss']
})
export class WellnessComponent implements OnInit {

  tableColumns: ITableColumn[] = this.config.wellnessdatasColumns;

  constructor(
    private config: ConfigService,
  ) { }

  ngOnInit(): void {
  }

}
