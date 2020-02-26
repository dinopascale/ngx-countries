import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, BehaviorSubject, Subscription, of, EMPTY } from 'rxjs';
import { map, tap, switchMap, scan, catchError } from 'rxjs/operators';

import { CountriesApiService, ApiCallGetSingle } from './countries-api.service';
import { Country, Borders } from 'src/app/interfaces/countries.interface';

@Injectable({
  providedIn: 'any'
})
export class CountryDetailsService implements Resolve<Country> {

  private borders$: BehaviorSubject<Borders[]> = new BehaviorSubject<Borders[]>(null);

  constructor(private countriesApi: CountriesApiService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Country | null> {
    return this.countriesApi.getCountryByCode({ param: `/${route.params.countryCode}` })
      .pipe(
        catchError(err => {
          this.router.navigate(['/']);
          return EMPTY;
        })
      ) as Observable<Country>;
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
