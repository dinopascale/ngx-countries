import { Component, OnInit, ChangeDetectionStrategy, Optional, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Country } from 'src/interfaces/countries.interface'
import { CountriesService } from 'src/services/countries.service';
import { shareReplay } from 'rxjs/operators';

@Component({
  selector: 'cnt-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountriesComponent implements OnInit, OnDestroy {

  countries$: Observable<Partial<Country>[]>
  error$: Observable<boolean>
  loading$: Observable<boolean>
  private sub: Subscription

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.error$ = this.countriesService.countriesFailed.pipe(shareReplay(1));
    this.loading$ = this.countriesService.countriesLoading.pipe(shareReplay(1));
    this.countries$ = this.countriesService.countries;

    this.sub = this.countriesService.fetchCountries(['name', 'capital', 'population', 'flag', 'alpha3Code']);
  }

  ngOnDestroy(): void {
    !!this.sub && this.sub.unsubscribe();
  }

}
