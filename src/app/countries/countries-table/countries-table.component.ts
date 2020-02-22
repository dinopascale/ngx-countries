import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Country } from 'src/interfaces/countries.interface';

@Component({
  selector: 'cnt-countries-table',
  templateUrl: './countries-table.component.html',
  styleUrls: ['./countries-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountriesTableComponent {
  @Input() countries: Partial<Country>[];

  trackBy(country: Partial<Country>) {
    return country.name;
  }
}
