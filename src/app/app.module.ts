import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { ScrollingModule } from '@angular/cdk/scrolling';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CountriesComponent } from './countries/countries.component';
import { CountriesTableComponent } from './countries/countries-table/countries-table.component';
import { CountryRowComponent } from './countries/countries-table/country-row/country-row.component';

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    CountriesTableComponent,
    CountryRowComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
