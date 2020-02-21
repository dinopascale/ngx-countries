import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

/*
* this function adds filters as to base url of api route.
* we take care of encoding strings and name of filters.
* if no filters are passed, it returns url untouched;
* final form: url (with or without dynamic params) + ?fields=field1&field2&...
*/
const addFilters = (url: string, filters?: string[]): string => url + (filters ? `?fields=${filters.map(f => encodeURIComponent(f)).join(';')}` : '')


/*
* this function adds dynamic params to base url af api route.
* we take care of encoding strings and name of filters.
* if no params are passed, it returns url untouched
* final form: baseURL + /params
*/ 
const addDynamicParams = (url: string, param?: string): string => url + (param ? encodeURI(param) : '');

@Injectable({
    providedIn: 'root'
})
export class CountriesApiService {

    readonly baseCountryApiUrl: string = 'https://restcountries.eu/rest/v2';

    // with this factory function we concat multiple pure functions and make possible to map every api route staying DRY
    private withFilterFactory = (url: string) => ({filters, param}: {filters?: string[], param?: string}) => this.http.get(addFilters(addDynamicParams(this.baseCountryApiUrl + url, param), filters));

    constructor(private http: HttpClient) {}

    getAllCountries: ({filters}: {filters?: string[]}) => Observable<any> = this.withFilterFactory('/all');

    getCountryByName: ({filters, param}: {filters?: string[], param?: string}) => Observable<any> = this.withFilterFactory(`/name`);

    getCountryByCode: ({filters, param}: {filters?: string[], param?: string}) => Observable<any> = this.withFilterFactory('/alpha');
    
}