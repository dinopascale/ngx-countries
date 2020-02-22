import { Pipe, PipeTransform } from '@angular/core';
import { SortCriteria, Country } from 'src/interfaces/countries.interface';

@Pipe({
  name: 'sortCountries'
})
export class SortCountriesPipe implements PipeTransform {

  transform(countries: Country[], sortCriteria: SortCriteria): Country[] {

    const {type, order} = sortCriteria;

    if (type === 'none') {
      return countries;
    }



    const typeToSort = (type === 'population' && order === 'NONE') ? 'name' : type

    return countries.sort((c1, c2) => {

      if (c1[typeToSort] > c2[typeToSort]) {
        return  order === 'ASC' || order === 'NONE' ? 1 : -1
      }

      if (c1[typeToSort] < c2[typeToSort]) {
        return  order === 'ASC' || order === 'NONE' ? -1 : 1
      }      

      return 0;
    })
  }

}
