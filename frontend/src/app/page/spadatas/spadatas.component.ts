import { Component, OnInit } from '@angular/core';
import { ConfigService, ITableColumn } from 'src/app/service/config.service';

@Component({
  selector: 'app-spadatas',
  templateUrl: './spadatas.component.html',
  styleUrls: ['./spadatas.component.scss']
})
export class SpadatasComponent implements OnInit {

  tableColumns: ITableColumn[] = this.config.spadatasColumns;

  constructor(
    private config: ConfigService,
  ) { }

  ngOnInit(): void {
  }

}
