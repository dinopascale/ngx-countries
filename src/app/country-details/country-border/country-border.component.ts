import { Borders } from 'src/interfaces/countries.interface';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'cnt-country-border',
  template: `
    <div class="border-card" [routerLink]="['/country/' + border.alpha3Code]">
      <span class="flag" [ngStyle]="{backgroundImage: 'url(' + border.flag + ')'}"></span>
    </div>
    <h4 class="name grey-dark-fg">
      <a [routerLink]="['/country/' + border.alpha3Code]">{{border.name}}</a>
    </h4>
  `,
  styleUrls: ['./country-border.component.scss']
})
export class CountryBorderComponent {

  @Input() border: Borders;

  constructor() { }

}
