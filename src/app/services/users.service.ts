import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../modal/user.modal';

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
}
