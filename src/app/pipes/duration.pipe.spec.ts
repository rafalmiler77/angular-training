import { DurationPipe } from './duration.pipe';

describe('DurationPipe', () => {
  let pipe: DurationPipe;

  beforeEach(() => {
    pipe = new DurationPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transform duration time correctly', () => {
    expect(pipe.transform(0)).toBe('');
    expect(pipe.transform(40)).toBe('40 min');
    expect(pipe.transform('40')).toBe('40 min');
    expect(pipe.transform(60)).toBe('1h');
    expect(pipe.transform(140)).toBe('2h 20 min');
  });
});
