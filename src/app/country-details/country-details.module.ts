import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CountryDetailsRoutingModule } from './country-details-routing.module';
import { GMapStaticModule } from './gmap-static/gmap-static.module';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

import { CountryDetailsComponent } from './country-details.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { CountryBorderComponent } from './country-border/country-border.component';

@NgModule({
  declarations: [CountryDetailsComponent, CountryDetailComponent, CountryBorderComponent],
  imports: [
    CommonModule,
    CountryDetailsRoutingModule,
    GMapStaticModule,
    SharedModule,
    CarouselModule
  ]
})
export class CountryDetailsModule { }
