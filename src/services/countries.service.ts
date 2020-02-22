import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, throwError} from 'rxjs'
import {Country} from 'src/interfaces/countries.interface';
import {CountriesApiService} from './countries-api.service';
import { catchError, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private isChached: boolean;

  private countries$: BehaviorSubject<Pick<Country, keyof Country>[]> = new BehaviorSubject<Country[]>([]);
  private countriesFailed$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private countriesLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private countryApi: CountriesApiService) {}

  get countries(): Observable<Country[]> { return this.countries$.asObservable() }

  get countriesFailed(): Observable<boolean> { return this.countriesFailed$.asObservable() }

  get countriesLoading(): Observable<boolean> { return this.countriesLoading$.asObservable() }

  fetchCountries<D extends keyof Country>(filters?: D[]): void {

    if (this.isChached) { return; }

    this.countriesLoading$.next(true);
    this.countriesFailed$.next(false);

    this.countryApi.getAllCountries({filters})
      .pipe(
      )
      .subscribe(
        response => {
          this.countriesLoading$.next(false);
          this.countries$.next(response);
          this.isChached = true;
        },
        error => {
          this.countriesLoading$.next(false);
          this.countries$.next([])
          this.countriesFailed$.next(true)
        }
      )
  }
}
