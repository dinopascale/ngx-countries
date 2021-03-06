import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError, Subscription } from 'rxjs'
import { Country, SortCriteria, Sorting, Orders, Region } from 'src/app/interfaces/countries.interface';
import { CountriesApiService } from './countries-api.service';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private isChached: boolean;

  private countries$: BehaviorSubject<Partial<Country>[]> = new BehaviorSubject<Country[]>([]);
  private countriesFailed$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private countriesLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private sortingCriteria$: BehaviorSubject<SortCriteria> = new BehaviorSubject<SortCriteria>({ type: 'name', order: 'ASC' });
  private filterCriteria$: BehaviorSubject<Region> = new BehaviorSubject<Region>('Global');

  constructor(private countryApi: CountriesApiService) { }

  get countries(): Observable<Partial<Country>[]> { return this.countries$.asObservable(); }

  get countriesFailed(): Observable<boolean> { return this.countriesFailed$.asObservable(); }

  get countriesLoading(): Observable<boolean> { return this.countriesLoading$.asObservable(); }

  get sortingCriteria(): Observable<SortCriteria> { return this.sortingCriteria$.asObservable().pipe(shareReplay(1)); }

  get filterCriteria(): Observable<Region> { return this.filterCriteria$.asObservable().pipe(shareReplay(1)); }

  fetchCountries<D extends keyof Country>(filters?: D[]): Subscription {

    if (this.isChached) { return; }

    this.countriesLoading$.next(true);
    this.countriesFailed$.next(false);

    return this.countryApi.getAllCountries({ filters })
      .pipe(
      )
      .subscribe(
        response => {
          this.countriesLoading$.next(false);
          this.countries$.next(response as Pick<Country, D>[]);
          this.isChached = true;
        },
        error => {
          this.countriesLoading$.next(false);
          this.countries$.next([]);
          this.countriesFailed$.next(true);
        }
      )
  }

  setSort(sortType: Sorting, orderType?: Orders): void {
    let newOrder: Orders;

    const { order: oldOrder, type: oldType } = this.sortingCriteria$.getValue();

    if (orderType) { newOrder = orderType; }
    else if (sortType !== oldType) { newOrder = 'ASC'; }
    else if (oldOrder === 'ASC') { newOrder = 'DESC'; }
    else { newOrder = 'ASC'; }


    this.sortingCriteria$.next({ type: sortType !== oldType ? sortType : oldType, order: newOrder });
  }

  resetSort(): void {
    this.sortingCriteria$.next({ type: 'name', order: 'ASC' });
  }

  setFilter(region: Region): void {
    this.filterCriteria$.next(region);
  }

  resetFilter(): void {
    this.filterCriteria$.next('Global');
  }
}
