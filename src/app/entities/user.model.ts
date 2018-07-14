export interface User {
  token: string;
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
}

export class UserClass implements User {
  public token = '3';
  public email;
  public password;
  public firstName = '';
  public lastName = '';

  constructor(properties: any) {
    Object.assign(this, properties);
  }
}
