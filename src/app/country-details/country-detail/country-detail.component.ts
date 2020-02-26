import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cnt-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountryDetailComponent {
  @Input() detailValue: any;
  @Input() detailLabel: string;
}
