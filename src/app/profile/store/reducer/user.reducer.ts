import { User } from 'src/app/modal/user.modal';
import * as usersActions from '../actions/user.actions';

export interface UsersState {
  user: User;
  authenticated: boolean;
}

const initialState: UsersState = {
  user: new User('', '', '', '', '', '', 0),
  authenticated: false,
};

export function userDataReducer(
  state: UsersState = initialState,
  action: usersActions.Actions
) {
  switch (action.type) {
    case usersActions.AUTHENTICATE_USER:
      console.log('[UserReducer AuthenticateUser]', action.payLoad);
      return {
        ...state,
        user: action.payLoad,
        authenticated: true,
      };
    case usersActions.LOGOUT_USER:
      return {
        ...state,
        user: new User('', '', '', '', '', null, 0),
        authenticated: false,
      };
    default:
      return {
        ...state,
      };
  }
}
