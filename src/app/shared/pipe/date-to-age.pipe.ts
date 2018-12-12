import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateToAge',
})
export class DateToAgePipe implements PipeTransform {
  transform(birthday: Date, args?: any): any {
    const now = new Date();
    const born = new Date(birthday);
    const years = Math.floor(
      (now.getTime() - born.getTime()) / (365 * 24 * 60 * 60 * 1000),
    );
    return years;
  }
}
