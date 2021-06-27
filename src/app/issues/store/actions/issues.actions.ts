import { Action } from '@ngrx/store';
import { Issue } from 'src/app/modal/issue.modal';

export const GET_ISSUES = 'GET_ISSUE';
export const UPDATE_ISSUE = 'UPDATE_ISSUE';
export const ADD_ISSUE = 'ADD_ISSUE';
export const DELETE_ISSUE = 'DELETE_ISSUE';
export const START_EDIT = 'START_EDIT';
export const STOP_EDIT = 'STOP_EDIT';

export class GetIssues implements Action {
  readonly type = GET_ISSUES;
  constructor(public payLoad: Issue[]) {}
}

export class AddIssue implements Action {
  readonly type = ADD_ISSUE;
  constructor(public payLoad: Issue) {}
}

export class UpdateIssue implements Action {
  readonly type = UPDATE_ISSUE;
  constructor(public payLoad: { issue: Issue }) {}
}

export class DeleteIssue implements Action {
  readonly type = DELETE_ISSUE;
}

export class StartEditing implements Action {
  readonly type = START_EDIT;
  constructor(public payLoad: number) {}
}

export class StopEditing implements Action {
  readonly type = STOP_EDIT;
}

export type Actions =
  | GetIssues
  | AddIssue
  | UpdateIssue
  | DeleteIssue
  | StartEditing
  | StopEditing;
