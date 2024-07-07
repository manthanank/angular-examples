import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'customSlice' })
export class CustomSlicePipe implements PipeTransform {
  transform(value: any[], start: number, end?: number): any[] {
    return value.slice(start, end);
  }
}
