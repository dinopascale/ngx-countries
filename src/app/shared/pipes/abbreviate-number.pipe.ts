import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'abbreviateNumber'
})
export class AbbreviateNumberPipe implements PipeTransform {

  SI_SYMBOL = ['', 'k', 'M', 'B'];

  transform(n: number): string {

    if (!n) { return 'No Data'; }

    const tier = Math.log10(n) / 3 | 0;

    if (tier === 0) { return n + ''; }

    const suffix = this.SI_SYMBOL[tier];
    const scale = Math.pow(10, tier * 3);

    const scaled = n / scale;

    console.log(scaled.toFixed(1) + suffix, n);

    return scaled.toFixed(1) + suffix;
  }

}
