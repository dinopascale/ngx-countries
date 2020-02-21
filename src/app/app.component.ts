import { Component, OnInit } from '@angular/core';
import { CountriesApiService } from 'src/api/countries.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  constructor(private countriesApi: CountriesApiService) {}
  
  ngOnInit(): void {
    this.countriesApi.getAllCountries({filters:['name', 'capital', 'currencies']}).subscribe(c => console.log('Countries', c))
    this.countriesApi.getCountryByName({param: '/Italy', filters: ['name']}).subscribe(c => console.log('ITALIA', c))
    this.countriesApi.getCountryByCode({param: '?codes=col;no;ee'}).subscribe(c => console.log('PROVIAMO ', c))
  }
}
