import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Country } from 'src/interfaces/countries.interface';

@Component({
  selector: 'cnt-country-row',
  template: `
    <div class="country-row">
      <div [ngStyle]="{backgroundImage: 'url(' + country.flag + ')'}" class="flag"></div>
      <a [routerLink]="[link]">{{country.name}}</a>
      <span>{{country.population}}</span>
    </div>
  `,
  styleUrls: ['./country-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountryRowComponent {

  @Input() country: Partial<Country>

  get link (): string {
    return '/country/' + encodeURI(this.country.name);
  }

}
