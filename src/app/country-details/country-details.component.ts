import { GMapStatisService } from './gmap-static/gmap-static.service';
import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { tap, switchMap, takeUntil } from 'rxjs/operators';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { Country, Borders } from 'src/app/interfaces/countries.interface';
import { CountryDetailsService } from 'src/app/services/country-details.service';


@Component({
  selector: 'cnt-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountryDetailsComponent implements OnInit, OnDestroy {

  private _unsubscribe = new Subject<void>();


  borders$: Observable<Borders[]>;
  country: Country;
  backIcon = faArrowLeft;

  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    dotsEach: true,
    nav: false,
    stagePadding: 10,
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
  };

  constructor(private route: ActivatedRoute, private countryDetails: CountryDetailsService, private gMapStatic: GMapStatisService) { }

  ngOnInit(): void {

    this.route.data
      .pipe(
        tap(({ country }) => this.country = country),
        switchMap(({ country }) => this.countryDetails.getBorders(country.borders)),
        takeUntil(this._unsubscribe)
      )
      .subscribe();

    this.borders$ = this.countryDetails.borders.pipe(takeUntil(this._unsubscribe));

  }

  ngOnDestroy(): void {
    this._unsubscribe.next();
    this._unsubscribe.complete();
  }

  mapUrl(): string {
    if (this.country) return this.gMapStatic.getMapUrl(this.country.latlng.join(','), this.country.name);
  }

}
