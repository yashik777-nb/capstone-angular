import { Action } from '@ngrx/store';

import { User } from 'src/app/modal/user.modal';

export const AUTHENTICATE_USER = 'AUTHENTICATE_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export class AuthenticateUser implements Action {
  readonly type = AUTHENTICATE_USER;
  constructor(public payLoad: User) {}
}
export class LogoutUser implements Action {
  readonly type = LOGOUT_USER;
}

export type Actions = AuthenticateUser | LogoutUser;
