import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { Country } from 'src/interfaces/countries.interface';

export type ApiCallGetAll = <D extends keyof Country>({filters}: {filters?: D[]}) => Observable<Pick<Country, D>[]>
export type ApiCallGetSingle = <D extends keyof Country>({filters, param}: {filters?: D[], param?: string}) => Observable<Pick<Country, D>>

/*
* this function adds filters as to base url of api route.
* we take care of encoding strings and name of filters.
* if no filters are passed, it returns url untouched;
* final form: url (with or without dynamic params) + ?fields=field1&field2&...
*/
const addFilters = <D extends keyof Country>(url: string, filters?: D[]): string => url + (filters ? `?fields=${filters.join(';')}` : '')


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
    private withFilterFactory = (url: string) => <D extends keyof Country>({filters, param}: {filters?: D[], param?: string}) => this.http.get<Pick<Country, D>[] | Pick<Country, D>>(addFilters(addDynamicParams(this.baseCountryApiUrl + url, param), filters));

    constructor(private http: HttpClient) {}

    getAllCountries = this.withFilterFactory('/all') as ApiCallGetAll;

    getCountryByName = this.withFilterFactory('/name') as ApiCallGetSingle;

    getCountryByCode = this.withFilterFactory('/alpha');
    
}