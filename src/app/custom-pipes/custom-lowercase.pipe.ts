import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'customLowercase' })
export class CustomLowercasePipe implements PipeTransform {
  transform(value: string): string {
    return value ? value.toLowerCase() : value;
  }
}
