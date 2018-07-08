import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let h: string | number = Math.floor(value / 60);
    h = h === 0 ? '' : `${h}h`;
    let m: string | number = value % 60;
    m = m === 0 ? '' : `${m} min`;

    if (h === ''){
      return `${m}`;
    }
    return m === '' ? `${h}` : `${h} ${m}`;
  }
}
