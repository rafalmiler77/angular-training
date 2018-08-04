import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBy'
})
export class FilterByPipe implements PipeTransform {

  transform(value: any[], searchTerm?: string): any {
    const len = searchTerm.length;
    if (len === 0) {
      return value;
    }
    const filteredCourses = value.filter((course) => {
      return course.name.slice(0, len).toLowerCase() === searchTerm.toLowerCase();
    });
    return filteredCourses;
  }

}
