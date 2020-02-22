import { Pipe, PipeTransform } from '@angular/core';
import { Country } from 'src/interfaces/countries.interface';

@Pipe({
  name: 'filterCountries'
})
export class FilterCountriesPipe implements PipeTransform {

  transform(countries: Country[], {prop, value}: {prop: keyof Country, value: string}): Country[] {

    console.log(countries, prop, value);

    if (!prop || !value) { return countries; }

    return countries.filter(country => country[prop] === value);

  }

}
