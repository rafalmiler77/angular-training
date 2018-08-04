export interface Course {
  id: number;
  name: string;
  date: Date;
  length: number;
  description: string;
  isTopRated: boolean;
}

export class CourseClass implements Course {
  public id: number;
  public name = '';
  public date: Date = new Date();
  public length = 0;
  public description = '';
  public isTopRated = false;

  constructor(properties: any) {
    Object.assign(this, properties);
  }
}
