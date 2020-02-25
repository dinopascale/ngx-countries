import { Component, OnInit, ChangeDetectionStrategy, Optional, OnDestroy, TemplateRef, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Country, Sorting, Orders, Region, SortCriteria } from 'src/app/interfaces/countries.interface';
import { CountriesService } from 'src/app/services/countries.service';
import { shareReplay } from 'rxjs/operators';

import { ToolbarAction } from 'src/app/interfaces/toolbar.interface';
import { faHome, faFilter, faSort } from '@fortawesome/free-solid-svg-icons';
import { SortFormComponent } from '../core/sort-form/sort-form.component';
import { FilterFormComponent } from '../core/filter-form/filter-form.component';

@Component({
  selector: 'cnt-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountriesComponent implements OnInit, OnDestroy {

  countries$: Observable<Partial<Country>[]>;
  error$: Observable<boolean>;
  loading$: Observable<boolean>;

  private subFetchCountries: Subscription;
  private subSorting: Subscription;

  toolbarActions: ToolbarAction[] = [
    {
      icon: faHome,
      label: 'Home',
      eventSign: 'home'
    },
    {
      icon: faSort,
      label: 'Sort',
      eventSign: 'sort'
    },
    {
      icon: faFilter,
      label: 'Filter',
      eventSign: 'filter'
    }
  ];

  @ViewChild('sort', { read: TemplateRef }) sortTemplateRef: TemplateRef<SortFormComponent>;
  @ViewChild('filter', { read: TemplateRef }) filterTemplateRef: TemplateRef<FilterFormComponent>;

  filteringCriteria$: Observable<Region>;
  sortingCriteria$: Observable<SortCriteria>;

  showHideBar = false;
  templateToShowInSidebar: TemplateRef<SortFormComponent | FilterFormComponent>;

  constructor(private countriesService: CountriesService) { }

  ngOnInit(): void {
    this.error$ = this.countriesService.countriesFailed.pipe(shareReplay(1));
    this.loading$ = this.countriesService.countriesLoading.pipe(shareReplay(1));
    this.countries$ = this.countriesService.countries;

    this.subSorting = this.countriesService.sortingCriteria
      .pipe(
        map(({ type, order }) => type !== 'name' || (type === 'name' && order === 'DESC')))
      .subscribe(isActive => this.toolbarActions = this.toolbarActions.map(tA => tA.label === 'Sort' ? ({ ...tA, active: isActive }) : tA));

    this.filteringCriteria$ = this.countriesService.filterCriteria
      .pipe(
        tap(region => {
          this.toolbarActions = this.toolbarActions.map(tA => tA.label === 'Filter' ? ({ ...tA, active: region !== 'Global' }) : tA);
        })
      );

    this.subFetchCountries = this.countriesService.fetchCountries(['name', 'capital', 'population', 'flag', 'alpha3Code', 'region']);
  }

  ngOnDestroy(): void {
    !!this.subFetchCountries && this.subFetchCountries.unsubscribe();
    !!this.subSorting && this.subSorting.unsubscribe();
  }

  handleToolbarActions(eventSign: 'home' | 'filter' | 'sort'): void {
    if (eventSign === 'home') {

    } else {
      this.showHideBar = true;
      document.body.classList.add('no-overflow');
      this.templateToShowInSidebar = eventSign === 'filter' ? this.filterTemplateRef : this.sortTemplateRef;
    }
  }

  closeSidebar(): void {
    document.body.classList.remove('no-overflow');
    this.showHideBar = false;
  }

  onSortChosen({ type, order }: { type: Sorting, order: Orders }) {
    this.showHideBar = false;
    this.countriesService.setSort(type, order);
    window.scrollTo(0, 0);
    document.body.classList.remove('no-overflow');
  }

  onFilterChosen({ region }: { region: Region }) {
    this.showHideBar = false;
    this.countriesService.setFilter(region);
    window.scrollTo(0, 0);
    document.body.classList.remove('no-overflow');
  }

}
