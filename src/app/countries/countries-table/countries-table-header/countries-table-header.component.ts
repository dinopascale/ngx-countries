import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { CountriesService } from 'src/app/services/countries.service';
import { Sorting, SortCriteria } from 'src/app/interfaces/countries.interface';

@Component({
  selector: 'cnt-countries-table-header',
  template: `
    <div class="country-table-header" *ngIf="sortingCriteria$ | async as sort">
      <div class="header-cell flag"></div>
      <div class="header-cell name">
        <span class="grey-dark-fg">Name</span>
      </div>
      <div class="header-cell region no-mobile">
        <span class="grey-dark-fg">Region</span>
      </div>
      <div class="header-cell capital no-mobile">
        <span class="grey-dark-fg">Capital</span>
      </div>
      <div class="header-cell population">
        <span class="grey-dark-fg">Population</span>
      </div>
    </div>
  `,
  styleUrls: ['./countries-table-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountriesTableHeaderComponent implements OnInit {

  sortingCriteria$: Observable<SortCriteria>;

  constructor(private countriesService: CountriesService) { }

  handleSortBy(type: Sorting): void {
    this.countriesService.setSort(type)
  }

  ngOnInit(): void {
    this.sortingCriteria$ = this.countriesService.sortingCriteria;
  }

}
