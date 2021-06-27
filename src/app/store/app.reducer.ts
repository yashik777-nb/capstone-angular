import { ActionReducerMap } from '@ngrx/store';
import * as fromIssuesReducer from '../issues/store/reducer/issues.reducer';

export interface AppState {
  issuesList: fromIssuesReducer.IssuesListState;
}

export const appReducer: ActionReducerMap<AppState> = {
  issuesList: fromIssuesReducer.issuesListReducer,
};
