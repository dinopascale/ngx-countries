import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnInit {

  countryName$: Observable<string>

  constructor(private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.countryName$ = this._route.params.pipe(map(params => params.countryName))
  }

}
