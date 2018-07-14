export interface Course {
  id: number;
  title: string;
  creationDate: Date;
  duration: number;
  description: string;
  topRated: boolean;
}

export class CourseClass implements Course {
  public id: number;
  public title = '';
  public creationDate: Date = new Date();
  public duration = 0;
  public description = '';
  public topRated = false;

  constructor(properties: any) {
    Object.assign(this, properties);
  }
}
