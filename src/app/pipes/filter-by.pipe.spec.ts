import { FilterByPipe } from './filter-by.pipe';
import { Course } from 'app/entities/course.model';
const coursesMock: Course[] = [
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
  }
];

describe('FilterByPipe', () => {
  let pipe: FilterByPipe;

  beforeEach(() => {
    pipe = new FilterByPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transform courses correctly', () => {
    const searchTerm = 'a';
    const result = pipe.transform(coursesMock, searchTerm);
    expect(result.length).toBe(1);
  });
});
