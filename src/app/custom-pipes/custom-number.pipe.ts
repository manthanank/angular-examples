import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'customNumber' })
export class CustomNumberPipe implements PipeTransform {
  transform(value: number, digitsInfo: string = '1.0-3', locale: string = 'en-US'): string {
    return new Intl.NumberFormat(locale, { minimumFractionDigits: 2 }).format(value);
  }
}
