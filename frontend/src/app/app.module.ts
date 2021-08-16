import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AreusFormModule } from './areus-form/areus-form.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './common/navigation/navigation.component';
import { SideNavComponent } from './common/side-nav/side-nav.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { UsersComponent } from './page/users/users.component';
import { WeatherComponent } from './page/weather/weather.component';
import { WellnessComponent } from './page/wellness/wellness.component';
import { SpadatasComponent } from './page/spadatas/spadatas.component';
import { SpareportComponent } from './page/spareport/spareport.component';
import { DataTableComponent } from './common/data-table/data-table.component';
import { LoginComponent } from './page/login/login.component';
import { UserEditComponent } from './page/user-edit/user-edit.component';
import { SpadatasEditComponent } from './page/spadatas-edit/spadatas-edit.component';
import { SpareportEditComponent } from './page/spareport-edit/spareport-edit.component';
import { WeatherEditComponent } from './page/weather-edit/weather-edit.component';
import { WellnessEditComponent } from './page/wellness-edit/wellness-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SideNavComponent,
    DashboardComponent,
    UsersComponent,
    WeatherComponent,
    WellnessComponent,
    SpadatasComponent,
    SpareportComponent,
    DataTableComponent,
    LoginComponent,
    UserEditComponent,
    SpadatasEditComponent,
    SpareportEditComponent,
    WeatherEditComponent,
    WellnessEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AreusFormModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
