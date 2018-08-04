import { Course } from 'app/entities/course.model';

export const coursesMock: Course[] = [
  {
    id: 1,
    name: 'Angular Course',
    date: new Date(2016, 8, 24),
    length: 60,
    isTopRated: true,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
     do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    id: 2,
    name: 'Python Course',
    date: new Date(2017, 3, 7),
    length: 40,
    isTopRated: false,
    description: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`
  },
  {
    id: 3,
    name: 'Java Ninja',
    date: new Date(2020, 3, 7),
    length: 90,
    isTopRated: false,
    description: `Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
     quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.`
  },
  {
    id: 4,
    name: 'Bash Hero',
    date: new Date(2017, 8, 5),
    length: 240,
    isTopRated: true,
    description: `Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
     eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.`
  },
  {
    id: 5,
    name: 'React Course',
    date: new Date(2017, 3, 15),
    length: 180,
    isTopRated: false,
    description: ` Duis aute irure dolor
     in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
      sunt in culpa qui officia deserunt mollit anim id est laborum.`
  },
];
