import { Injectable } from '@angular/core';
import { User } from '../entities/user.model';

@Injectable()
export class UserService {

  constructor() { }

  public getUser(): User {
    return {
        id: 1,
        firstName: 'Rafal',
        lastName: 'Miler',
      };
  }
}
