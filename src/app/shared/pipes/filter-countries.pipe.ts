import { Pipe, PipeTransform } from '@angular/core';
import { Country } from 'src/app/interfaces/countries.interface';

@Pipe({
  name: 'filterCountries'
})
export class FilterCountriesPipe implements PipeTransform {

  transform(countries: Partial<Country>[], { prop, value }: { prop: keyof Country, value: string }): Partial<Country>[] {

    if (!prop || !value) { return countries; }

    if (value === 'Global') {
      return countries;
    }

    return countries.filter(country => country[prop] === value);

  }

}
