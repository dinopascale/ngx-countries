import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryDetailsRoutingModule } from './country-details-routing.module';
import { CountryDetailsComponent } from './country-details.component';

@NgModule({
  declarations: [CountryDetailsComponent],
  imports: [
    CommonModule,
    CountryDetailsRoutingModule
  ]
})
export class CountryDetailsModule { }
