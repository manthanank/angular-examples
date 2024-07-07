import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'customJson' })
export class CustomJsonPipe implements PipeTransform {
  transform(value: any): string {
    return JSON.stringify(value, null, 2);
  }
}
