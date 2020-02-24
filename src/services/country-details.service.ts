import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, BehaviorSubject, Subscription, of } from 'rxjs';
import { map, tap, switchMap, scan } from 'rxjs/operators';

import { CountriesApiService, ApiCallGetSingle } from './countries-api.service';
import { Country, Borders } from 'src/interfaces/countries.interface';

@Injectable({
  providedIn: 'any'
})
export class CountryDetailsService implements Resolve<Country> {

  private borders$: BehaviorSubject<Borders[]> = new BehaviorSubject<Borders[]>(null);

  constructor(private countriesApi: CountriesApiService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Country> {
    return this.countriesApi.getCountryByCode({ param: `/${route.params.countryCode}` }) as Observable<Country>;
  }

  get borders(): Observable<Borders[]> {
    return this.borders$.asObservable();
  }

  getBorders(borders: string[]): Observable<Borders[]> {

    const source$: Observable<any> = borders.length === 0
      ? of([])
      : this.countriesApi.getCountryByCode({ param: `?codes=${borders.join(';')}` });

    return source$
      .pipe(
        map((countries: Country[]) => countries.length > 0
          ? countries.map(country => ({ name: country.name, alpha3Code: country.alpha3Code, flag: country.flag }))
          : []
        ),
        tap(bs => this.borders$.next(bs))
      );
  }

}
