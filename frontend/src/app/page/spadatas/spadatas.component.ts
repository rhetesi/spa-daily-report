import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  entity: string = 'spadata';

  constructor(
    private config: ConfigService,
    private spadatasService: SpadatasService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onSelectOne(spadatas: Spadatas): void {
    this.router.navigate(['/', 'spadatas', 'edit', spadatas._id]);
  }

  onDeleteOne(spadatas: Spadatas): void {
    if (window.confirm('Biztosan törli az adatsort?')) {
      this.spadatasService.remove(spadatas._id).subscribe(
        () => this.list$ = this.spadatasService.getAll()
      )
      window.alert('Az adatsor törlődött!')
    }
  }

}
