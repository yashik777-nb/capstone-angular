import { Issue } from 'src/app/modal/issue.modal';
import * as issuesActions from '../actions/issues.actions';

export interface IssuesListState {
  issues: Issue[];
  issuesCopy: Issue[];
  editedIssue: Issue;
  editedIssueIndex: number;
  issueSeverityFlag: boolean;
  issueStatusFlag: boolean;
  issueCreatedDateFlag: boolean;
  issueResolvedDateFlag: boolean;
}

const initialState: IssuesListState = {
  issues: [],
  issuesCopy: [],
  editedIssue: null,
  editedIssueIndex: -1,
  issueSeverityFlag: true,
  issueStatusFlag: true,
  issueCreatedDateFlag: true,
  issueResolvedDateFlag: true,
};

export function issuesListReducer(
  state: IssuesListState = initialState,
  action: issuesActions.Actions
) {
  switch (action.type) {
    case issuesActions.GET_ISSUES:
      return {
        ...state,
        issues: [...action.payLoad],
        issuesCopy: [...action.payLoad],
      };
    case issuesActions.FILTER_ISSUES:
      const issuesData = [...state.issuesCopy];
      const filteredIssues = issuesData.filter((issue: Issue) =>
        issue.issueDescription
          .toLowerCase()
          .includes(action.payLoad.toLowerCase())
      );
      return {
        ...state,
        issues: filteredIssues,
      };
    case issuesActions.ADD_ISSUE:
      return {
        ...state,
        issues: [...state.issues, action.payLoad],
        issuesCopy: [...state.issues, action.payLoad],
      };

    case issuesActions.UPDATE_ISSUE:
      const issue = state.issues[state.editedIssueIndex];
      const updatedIssue = {
        ...issue,
        ...action.payLoad,
      };
      const updatedIssues = [...state.issues];
      updatedIssue[state.editedIssueIndex] = updatedIssues;
      return {
        ...state,
        issues: updatedIssues,
        issuesCopy: updatedIssues,
        editedIngredient: null,
        editedIngredientIndex: -1,
      };
    case issuesActions.DELETE_ISSUE:
      // const newIngredeints = state.ingredients.splice(action.payLoad, 1);
      return {
        ...state,
        issues: state.issues.filter(
          (ig, index) => index !== state.editedIssueIndex
        ),
        issuesCopy: state.issues.filter(
          (ig, index) => index !== state.editedIssueIndex
        ),
        editedIssue: null,
        editedIssueIndex: -1,
      };
    case issuesActions.START_EDIT:
      return {
        ...state,
        editedIssue: { ...state.issues[action.payLoad] },
        editedIssueIndex: action.payLoad,
      };
    case issuesActions.STOP_EDIT:
      return {
        ...state,
        editedIssue: null,
        editedIssueIndex: -1,
      };
    case issuesActions.TOGGLE_ISSUE_SEVERITY:
      return {
        ...state,
        issueSeverityFlag: !state.issueSeverityFlag,
      };
    case issuesActions.TOGGLE_ISSUE_STATUS:
      return {
        ...state,
        issueStatusFlag: !state.issueStatusFlag,
      };
    case issuesActions.TOGGLE_ISSUE_CREATED_DATE:
      return {
        ...state,
        issueCreatedDateFlag: !state.issueCreatedDateFlag,
      };
    case issuesActions.TOGGLE_ISSUE_RESOLVED_DATE:
      return {
        ...state,
        issueResolvedDateFlag: !state.issueResolvedDateFlag,
      };
    default:
      return {
        ...state,
      };
  }
}
