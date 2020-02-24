import { Pipe, PipeTransform } from '@angular/core';
import { Country } from 'src/interfaces/countries.interface';

@Pipe({
  name: 'mapToString'
})
export class MapToStringPipe implements PipeTransform {

  transform(arr: any[], propToExtract?: keyof Country): unknown {
    if (!arr || !Array.isArray(arr)) {
      return arr;
    }
    return arr.map(el => propToExtract ? el[propToExtract] : el).join(', ');
  }

}
