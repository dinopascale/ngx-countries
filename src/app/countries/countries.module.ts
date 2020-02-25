import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from '../core/core.module';

import { CountriesComponent } from './countries.component';
import { CountriesTableComponent } from './countries-table/countries-table.component';
import { CountryRowComponent } from './countries-table/country-row/country-row.component';
import { CountriesTableHeaderComponent } from './countries-table/countries-table-header/countries-table-header.component';

const components = [
  CountriesComponent,
  CountriesTableComponent,
  CountryRowComponent,
  CountriesTableHeaderComponent
];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    ScrollingModule,
    RouterModule,
    SharedModule,
    CoreModule
  ],
  exports: [
    CountriesComponent
  ]
})
export class CountriesModule { }
