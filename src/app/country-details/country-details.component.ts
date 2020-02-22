import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CountriesApiService } from 'src/services/countries-api.service';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnInit {

  countryName$: Observable<string>

  constructor(private _route: ActivatedRoute, private countriesApi: CountriesApiService) { }

  ngOnInit(): void {
    this.countryName$ = this._route.params.pipe(map(params => decodeURI(params.countryName)))
    // this.countriesApi.getCountryByCode({param: '?codes=col;no;ee'}).subscribe(c => console.log('PROVIAMO ', c))
    // this.countriesApi.getCountryByName({param: '/Italy', filters: ['name']}).subscribe(c => console.log('ITALIA', c))
  }

}
