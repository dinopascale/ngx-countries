import { Pipe, PipeTransform } from '@angular/core';
import { setClassMetadata } from '@angular/core/src/r3_symbols';

@Pipe({
  name: 'abbreviateNumber'
})
export class AbbreviateNumberPipe implements PipeTransform {

  SI_SYMBOL = ['', 'k', 'M'];

  transform(n: number): string {
    const tier = Math.log10(n) / 3 | 0;

    if (tier === 0) { return n + ''; }

    const suffix = this.SI_SYMBOL[tier];
    const scale = Math.pow(10, tier * 3);

    const scaled = n / scale;

    return scaled.toFixed(1) + suffix;
  }

}
