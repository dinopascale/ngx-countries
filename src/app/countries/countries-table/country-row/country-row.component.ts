import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Country } from 'src/app/interfaces/countries.interface';

@Component({
  selector: 'cnt-country-row',
  template: `
    <div class="country-row" [routerLink]="[link]">
      <div class="cell flag">
        <div [ngStyle]="{backgroundImage: 'url(' + country.flag + ')'}" class="flag"></div>
      </div>
      <div class="cell name">
        <span>{{country.name}}</span>
      </div>
      <div class="cell population">
       <span>{{country.population | abbreviateNumber}}</span>
      </div>
    </div>
  `,
  styleUrls: ['./country-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountryRowComponent {

  @Input() country: Partial<Country>;

  get link(): string {
    return '/country/' + encodeURI(this.country.alpha3Code);
  }

}
