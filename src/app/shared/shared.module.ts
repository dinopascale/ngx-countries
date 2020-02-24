import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MobileToolbarComponent } from './mobile-toolbar/mobile-toolbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SortIconPipe } from './pipes/sort-icon.pipe';
import { SortCountriesPipe } from './pipes/sort-countries.pipe';
import { FilterCountriesPipe } from './pipes/filter-countries.pipe';
import { AbbreviateNumberPipe } from './pipes/abbreviate-number.pipe';
import { MapToStringPipe } from './pipes/map-to-string.pipe';

const pipes = [
  SortIconPipe,
  SortCountriesPipe,
  FilterCountriesPipe,
  AbbreviateNumberPipe,
  MapToStringPipe
];

@NgModule({
  imports: [CommonModule, FontAwesomeModule],
  declarations: [MobileToolbarComponent, ...pipes],
  exports: [MobileToolbarComponent, FontAwesomeModule, ...pipes]
})
export class SharedModule { }
