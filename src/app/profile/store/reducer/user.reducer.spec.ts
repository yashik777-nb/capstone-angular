import { userDataReducer } from './user.reducer';
import * as fromUserActions from '../actions/user.actions';
import { User } from 'src/app/modal/user.modal';

describe('Issues List Reducer', () => {
  it('should authenticate user reducer', () => {
    const initialState = {
      user: new User('', '', '', '', '', '', 0),
      authenticated: false,
    };
    const payLoad: User = new User(
      '1111',
      'Yash',
      'yash',
      'Yash',
      'IK',
      'U',
      111
    );
    const expectedState = {
      user: new User('1111', 'Yash', 'yash', 'Yash', 'IK', 'U', 111),
      authenticated: true,
    };

    const action = {
      type: fromUserActions.AUTHENTICATE_USER,
      payLoad,
    } as any;
    expect(userDataReducer(initialState, action)).toEqual(expectedState);
  });

  it('should logout user reducer', () => {
    const initialState = {
      user: new User('1111', 'Yash', 'yash', 'Yash', 'IK', 'U', 111),
      authenticated: true,
    };
    const expectedState = {
      user: new User('', '', '', '', '', '', 0),
      authenticated: false,
    };

    const action = {
      type: fromUserActions.LOGOUT_USER,
    } as any;
    expect(userDataReducer(initialState, action)).toEqual(expectedState);
  });
});
