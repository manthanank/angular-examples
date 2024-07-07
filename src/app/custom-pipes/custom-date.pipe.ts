import { Pipe, PipeTransform } from '@angular/core';
import { formatDate } from '@angular/common';

@Pipe({ name: 'customDate' })
export class CustomDatePipe implements PipeTransform {
  transform(value: any, format: string = 'mediumDate', locale: string = 'en-US'): string {
    return formatDate(value, format, locale);
  }
}
