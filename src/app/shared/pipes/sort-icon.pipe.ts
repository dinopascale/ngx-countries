import { PipeTransform, Pipe } from '@angular/core';
import { Orders, Sorting, SortCriteria } from 'src/app/interfaces/countries.interface';

@Pipe({
  name: 'sortIcon'
})
export class SortIconPipe implements PipeTransform {
  transform(sortCriteria: SortCriteria, type: Sorting): string {
    const dictionaryOrder: { [key in Orders]: string } = {
      'ASC': 'assets/icons/sort-up.svg',
      'DESC': 'assets/icons/sort-down.svg',
      'NONE': 'assets/icons/no-sort.svg'
    }
    const { type: typeCriteria, order } = sortCriteria;

    return !type || type === typeCriteria ? dictionaryOrder[order] : dictionaryOrder['NONE'];
  }
}
