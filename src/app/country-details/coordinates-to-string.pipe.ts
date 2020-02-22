import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'coordinatesToString'
})
export class CoordinatesToStringPipe implements PipeTransform {

  transform(value: number[]): string {
    return value.join(',');
  }

}
