import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value: any, sortParameter?: any): any {
    const compare = (a, b) => {
      return a[sortParameter] < b[sortParameter];
    };
    const sortedCourses = value.sort(compare);
    return sortedCourses;
  }

}
