import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { Country, SortCriteria } from 'src/app/interfaces/countries.interface';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'cnt-countries-table',
  templateUrl: './countries-table.component.html',
  styleUrls: ['./countries-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountriesTableComponent implements OnInit {
  @Input() countries: Partial<Country>[];

  sortingCriteria$: Observable<SortCriteria>;
  filteringCriteria$: Observable<string>;

  constructor(private countriesService: CountriesService) { }

  ngOnInit() {
    this.sortingCriteria$ = this.countriesService.sortingCriteria;
    this.filteringCriteria$ = this.countriesService.filterCriteria;
  }

  trackBy(country: Partial<Country>) {
    return country.alpha3Code;
  }
}
