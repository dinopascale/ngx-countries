import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { CountriesComponent } from './countries.component';
import { CountriesTableComponent } from './countries-table/countries-table.component';
import { CountryRowComponent } from './countries-table/country-row/country-row.component';
import { CountriesTableHeaderComponent } from './countries-table/countries-table-header/countries-table-header.component';

import { SortIconPipe } from '../pipes/sort-icon.pipe';
import { SortCountriesPipe } from '../pipes/sort-countries.pipe';
import { FilterCountriesPipe } from '../pipes/filter-countries.pipe';
import { RouterModule } from '@angular/router';

const components = [
    CountriesComponent,
    CountriesTableComponent,
    CountryRowComponent,
    CountriesTableHeaderComponent
]

const pipes = [
    SortIconPipe,
    SortCountriesPipe,
    FilterCountriesPipe
]

@NgModule({
    declarations: [
        ...components,
        ...pipes
    ],
    imports: [
        CommonModule,
        ScrollingModule,
        RouterModule
    ],
    exports: [
        CountriesComponent
    ]
})
export class CountriesModule {}