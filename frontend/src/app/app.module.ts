import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

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
import { DataTableComponent } from './commmon/data-table/data-table.component';

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
    DataTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }