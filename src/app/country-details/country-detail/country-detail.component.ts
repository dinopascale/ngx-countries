import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Country } from 'src/interfaces/countries.interface';

@Component({
  selector: 'cnt-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountryDetailComponent<K extends keyof Country> {
  @Input() detailValue: Pick<Country, K>;
  @Input() detailLabel: K;
}
