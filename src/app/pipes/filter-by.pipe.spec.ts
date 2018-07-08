import { FilterByPipe } from './filter-by.pipe';
import { coursesMock } from 'app/entities/coursesMock';

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
