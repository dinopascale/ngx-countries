import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { tap, switchMap, takeUntil } from 'rxjs/operators';

import { Country, Borders } from 'src/interfaces/countries.interface';
import { CountryDetailsService } from 'src/services/country-details.service';

@Component({
  selector: 'cnt-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnInit, OnDestroy {

  borders$: Observable<Borders[]>
  country: Country;

  private _unsubscribe = new Subject<void>();

  constructor(private route: ActivatedRoute, private countryDetails: CountryDetailsService) { }

  ngOnInit(): void {

    this.route.data
      .pipe(
        tap(({country}) => this.country = country),
        switchMap(({country}) => this.countryDetails.getBorders(country.borders)),
        takeUntil(this._unsubscribe)
      )
      .subscribe(); 

    // this.country = this.route.snapshot.data.country as Country;
    this.borders$ = this.countryDetails.borders.pipe(takeUntil(this._unsubscribe));    

  }

  ngOnDestroy(): void {
    this._unsubscribe.next();
    this._unsubscribe.complete();
  }

}
