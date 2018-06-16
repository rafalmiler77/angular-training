import { Injectable } from '@angular/core';
import { Course } from '../entities/course.model';

@Injectable()
export class CoursesService {

  constructor() { }

  public getCourses(): Course[] {
    return [
      {
        id: 1,
        title: 'Video Course 1',
        creationDate: new Date(2017, 3, 15),
        duration: 60,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
         do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
      },
      {
        id: 2,
        title: 'Video Course 2',
        creationDate: new Date(2017, 3, 7),
        duration: 40,
        description: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`
      },
      {
        id: 3,
        title: 'Video Course 3',
        creationDate: new Date(2017, 12, 25),
        duration: 90,
        description: `Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
         quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.`
      },
      {
        id: 4,
        title: 'Video Course 4',
        creationDate: new Date(2017, 8, 5),
        duration: 240,
        description: `Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
         eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.`
      },
      {
        id: 5,
        title: 'Video Course 5',
        creationDate: new Date(2017, 3, 15),
        duration: 180,
        description: ` Duis aute irure dolor
         in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.`
      },
    ];
  }

}
