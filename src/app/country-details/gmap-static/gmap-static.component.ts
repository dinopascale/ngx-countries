import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { GMapStatisService } from './gmap-static.service';

@Component({
  selector: 'cnt-gcmap-static',
  template: `<img class="gmaps-image" *ngIf="capitalLatLng && countryName" [src]="mapUrl">`,
  styles: [`
    .gmaps-image {
      width: 100%;
      border-radius: 8px;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GmapStaticComponent implements OnInit {

  @Input() capitalLatLng: string;
  @Input() countryName: string;

  get mapUrl() { return this._gMapStatic.getMapUrl(this.capitalLatLng, this.countryName) }

  constructor(private _gMapStatic: GMapStatisService) { }

  ngOnInit(): void { }

}
