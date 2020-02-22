import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryDetailsRoutingModule } from './country-details-routing.module';
import { CountryDetailsComponent } from './country-details.component';
import { GMapStaticModule } from './gmap-static/gmap-static.module';
import { CoordinatesToStringPipe } from './coordinates-to-string.pipe';

@NgModule({
  declarations: [CountryDetailsComponent, CoordinatesToStringPipe],
  imports: [
    CommonModule,
    CountryDetailsRoutingModule,
    GMapStaticModule
  ]
})
export class CountryDetailsModule { }
