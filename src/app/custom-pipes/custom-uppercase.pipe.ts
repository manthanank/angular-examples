import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'customUppercase' })
export class CustomUppercasePipe implements PipeTransform {
  transform(value: string): string {
    return value ? value.toUpperCase() : value;
  }
}
