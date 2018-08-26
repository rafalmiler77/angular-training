export interface Author {
  id: number;
  firstName: string;
  lastName: string;
}
export interface Course {
  id: number;
  name: string;
  date: Date;
  length: number;
  description: string;
  isTopRated: boolean;
  authors?: Author[];
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
