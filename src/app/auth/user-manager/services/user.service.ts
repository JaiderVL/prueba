import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[] = [{
    id: 1,
    name: 'Andres',
    lastname: 'Guzman',
    email: 'andres@mail.com',
    password: '123456',
    zone: '01'
  },
  {
    id: 2,
    name: 'Josefa',
    lastname: 'Doe',
    email: 'pepa.doe@mail.com',
    password: '123456',
    zone: '01'
  }];

  constructor() { }

  findAll(): Observable<User[]> {
    return of(this.users);
  }
}
