import { User } from 'src/app/modal/user.modal';
import * as fromUserActions from './user.actions';

describe('Test User Actions', () => {
  it('should Authenticate User Action', () => {
    const payLoad: User = new User(
      '1111',
      'Yash',
      'yash',
      'Yash',
      'IK',
      'U',
      111
    );
    const action = new fromUserActions.AuthenticateUser(payLoad);
    expect({ ...action }).toEqual({
      type: fromUserActions.AUTHENTICATE_USER,
      payLoad,
    });
  });

  it('should Logout User actions', () => {
    const action = new fromUserActions.LogoutUser();
    expect({ ...action }).toEqual({
      type: fromUserActions.LOGOUT_USER,
    });
  });
});
