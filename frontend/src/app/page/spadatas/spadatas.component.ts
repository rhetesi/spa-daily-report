import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Spadatas } from 'src/app/model/spadatas';
import { ConfigService, ITableColumn } from 'src/app/service/config.service';
import { SpadatasService } from 'src/app/service/spadatas.service';

@Component({
  selector: 'app-spadatas',
  templateUrl: './spadatas.component.html',
  styleUrls: ['./spadatas.component.scss']
})
export class SpadatasComponent implements OnInit {

  tableColumns: ITableColumn[] = this.config.spadatasColumns;
  list$: Observable<Spadatas[]> = this.spadatasService.getAll();

  constructor(
    private config: ConfigService,
    private spadatasService: SpadatasService,
  ) { }

  ngOnInit(): void {
  }

}
