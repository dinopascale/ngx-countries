import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MobileToolbarComponent } from './mobile-toolbar/mobile-toolbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';

import { SortIconPipe } from './pipes/sort-icon.pipe';
import { SortCountriesPipe } from './pipes/sort-countries.pipe';
import { FilterCountriesPipe } from './pipes/filter-countries.pipe';
import { AbbreviateNumberPipe } from './pipes/abbreviate-number.pipe';
import { MapToStringPipe } from './pipes/map-to-string.pipe';

const components = [
  MobileToolbarComponent
]

const pipes = [
  SortIconPipe,
  SortCountriesPipe,
  FilterCountriesPipe,
  AbbreviateNumberPipe,
  MapToStringPipe
];

@NgModule({
  imports: [CommonModule, FontAwesomeModule, ReactiveFormsModule],
  declarations: [...pipes, ...components],
  exports: [...components, FontAwesomeModule, ReactiveFormsModule, ...pipes]
})
export class SharedModule { }
