import { Borders } from 'src/app/interfaces/countries.interface';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'cnt-country-border',
  templateUrl: './country-border.component.html',
  styleUrls: ['./country-border.component.scss']
})
export class CountryBorderComponent {

  @Input() border: Borders;

  constructor() { }

}
