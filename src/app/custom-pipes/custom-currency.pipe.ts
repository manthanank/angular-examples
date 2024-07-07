import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'customCurrency' })
export class CustomCurrencyPipe implements PipeTransform {
  transform(value: number, currencyCode: string = 'USD', display: string = 'symbol', digitsInfo: string = '1.2-2', locale: string = 'en-US'): string {
    return new Intl.NumberFormat(locale, { style: 'currency', currency: currencyCode, minimumFractionDigits: 2 }).format(value);
  }
}
