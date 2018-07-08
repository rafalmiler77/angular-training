import { OrderByPipe } from './order-by.pipe';
import { coursesMock } from 'app/entities/coursesMock';

describe('OrderByPipe', () => {
  let pipe: OrderByPipe;

  beforeEach(() => {
    pipe = new OrderByPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transform courses correctly', () => {
    const result = pipe.transform(coursesMock, 'creationDate');
    expect(result[0].id).toBe(2);
  });
});
