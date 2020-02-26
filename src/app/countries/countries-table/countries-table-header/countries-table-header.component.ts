import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';

import { CountriesService } from 'src/app/services/countries.service';
import { Sorting, SortCriteria } from 'src/app/interfaces/countries.interface';

@Component({
  selector: 'cnt-countries-table-header',
  template: `
    <div class="country-table-header" *ngIf="sortingCriteria$ | async as sort">
      <div class="header-cell flag"></div>
      <div class="header-cell name" [class.active]="sort.type === 'name'">
        <span class="grey-dark-fg">
          <fa-icon
            [icon]="sort.order === 'ASC' || sort.type !== 'name' ? sortUp : sortDown"
            (click)="handleSortBy('name')"
            class="sort-icon"
          >
          </fa-icon>
          <p class="header-cell-label">Name</p>
        </span>
      </div>
      <div class="header-cell region no-mobile">
        <span class="grey-dark-fg">Region</span>
      </div>
      <div class="header-cell capital no-mobile">
        <span class="grey-dark-fg">Capital</span>
      </div>
      <div class="header-cell population" [class.active]="sort.type === 'population'">
        <span class="grey-dark-fg">
          <fa-icon
            class="sort-icon"
            [icon]="sort.order === 'ASC' || sort.type !== 'population' ? sortUp : sortDown"
            (click)="handleSortBy('population')"
          >
          </fa-icon>
          Population
        </span>
      </div>
    </div>
  `,
  styleUrls: ['./countries-table-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountriesTableHeaderComponent implements OnInit {

  sortUp = faArrowUp;
  sortDown = faArrowDown;

  sortingCriteria$: Observable<SortCriteria>;

  constructor(private countriesService: CountriesService) { }

  handleSortBy(type: Sorting): void {
    this.countriesService.setSort(type)
  }

  ngOnInit(): void {
    this.sortingCriteria$ = this.countriesService.sortingCriteria;
  }

}
