import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { LoginComponent } from './page/login/login.component';
import { SpadatasComponent } from './page/spadatas/spadatas.component';
import { SpareportComponent } from './page/spareport/spareport.component';
import { UsersComponent } from './page/users/users.component';
import { WeatherComponent } from './page/weather/weather.component';
import { WellnessComponent } from './page/wellness/wellness.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'spadatas',
    component: SpadatasComponent,
  },
  {
    path: 'spareport',
    component: SpareportComponent,
  },
  {
    path: 'wellness',
    component: WellnessComponent,
  },
  {
    path: 'weather',
    component: WeatherComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '**',
    redirectTo: '',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
