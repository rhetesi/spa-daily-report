import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { LoginComponent } from './page/login/login.component';
import { SpadatasEditComponent } from './page/spadatas-edit/spadatas-edit.component';
import { SpadatasComponent } from './page/spadatas/spadatas.component';
import { SpareportEditComponent } from './page/spareport-edit/spareport-edit.component';
import { SpareportComponent } from './page/spareport/spareport.component';
import { UserEditComponent } from './page/user-edit/user-edit.component';
import { UsersComponent } from './page/users/users.component';
import { WeatherEditComponent } from './page/weather-edit/weather-edit.component';
import { WeatherComponent } from './page/weather/weather.component';
import { WellnessEditComponent } from './page/wellness-edit/wellness-edit.component';
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
    path: 'user/edit/:id',
    component: UserEditComponent,
  },
  {
    path: 'spadatas',
    component: SpadatasComponent,
  },
  {
    path: 'spadatas/edit/:id',
    component: SpadatasEditComponent,
  },
  {
    path: 'spareport',
    component: SpareportComponent,
  },
  {
    path: 'spareport/edit/:id',
    component: SpareportEditComponent,
  },
  {
    path: 'wellness',
    component: WellnessComponent,
  },
  {
    path: 'wellness/edit/:id',
    component: WellnessEditComponent,
  },
  {
    path: 'weather',
    component: WeatherComponent,
  },
  {
    path: 'weather/edit/:id',
    component: WeatherEditComponent,
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
