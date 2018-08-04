export interface Name {
  first: string;
  last: string;
}
export interface User {
  id: number;
  fakeToken: string;
  login: string;
  password: string;
  name: Name;
}
export interface UserCredentials {
  login: string;
  password: string;
}

export class UserClass implements User {
  public id = 3988686;
  public fakeToken = '3jgtdghd';
  public login;
  public password;
  public name = {first: '', last: ''};

  constructor(properties: any) {
    Object.assign(this, properties);
  }
}
