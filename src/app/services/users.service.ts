import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../modal/user.modal';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UsersService {
  private usersURL = 'http://localhost:3001/users';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private _http: HttpClient) {}

  login() {
    return this._http.get(this.usersURL);
  }

  createUser(user: User) {
    const id = uuidv4();
    user.id = id;
    return this._http.post(this.usersURL, user, this.httpOptions);
  }
}
