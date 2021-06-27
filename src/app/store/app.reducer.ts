import { ActionReducerMap } from '@ngrx/store';
import * as fromIssuesReducer from '../issues/store/reducer/issues.reducer';
import * as fromUserReducer from '../profile/store/reducer/user.reducer';

export interface AppState {
  issuesList: fromIssuesReducer.IssuesListState;
  userData: fromUserReducer.UsersState;
}

export const appReducer: ActionReducerMap<AppState> = {
  issuesList: fromIssuesReducer.issuesListReducer,
  userData: fromUserReducer.userDataReducer,
};
