import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'customPercent' })
export class CustomPercentPipe implements PipeTransform {
  transform(value: number, digitsInfo: string = '1.0-2', locale: string = 'en-US'): string {
    return new Intl.NumberFormat(locale, { style: 'percent', minimumFractionDigits: 2 }).format(value);
  }
}
