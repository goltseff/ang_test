import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'dateFormatPipe'})
export class DateFormatPipe implements PipeTransform {
  transform(value: string): string {
    let result = '';
    if (!value) { return result; }
    const newDate = new Date(value);
    result = ((newDate.getDate() < 10) ? '0' : '') + newDate.getDate() + '-' +
    ((newDate.getMonth() < 9) ? '0' : '') + (newDate.getMonth() + 1) + '-' + newDate.getFullYear() + ' '
    + ((newDate.getHours() < 10) ? '0' : '') + newDate.getHours() + ':'
    + ((newDate.getMinutes() < 10) ? '0' : '') + newDate.getMinutes();

    return result;
  }
}
