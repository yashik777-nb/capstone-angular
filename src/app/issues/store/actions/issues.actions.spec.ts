import { Issue } from 'src/app/modal/issue.modal';
import * as fromIssuesActions from './issues.actions';

describe('Test Issues Actions', () => {
  it('should Get All Issues from Actions', () => {
    const payLoad: Issue[] = [
      new Issue(
        '1212',
        'One',
        'One',
        'Major',
        'Open',
        new Date(),
        new Date(),
        1
      ),
      new Issue(
        '2121',
        'Two',
        'Two',
        'Major',
        'Open',
        new Date(),
        new Date(),
        1
      ),
    ];
    const action = new fromIssuesActions.GetIssues(payLoad);
    expect({ ...action }).toEqual({
      type: fromIssuesActions.GET_ISSUES,
      payLoad,
    });
  });

  it('should Filter  All Issues from Actions', () => {
    const payLoad: string = 'One';
    const action = new fromIssuesActions.FilterIssues(payLoad);
    expect({ ...action }).toEqual({
      type: fromIssuesActions.FILTER_ISSUES,
      payLoad,
    });
  });

  it('should add an Issues from Actions', () => {
    const payLoad: Issue = new Issue(
      '2121',
      'Two',
      'Two',
      'Major',
      'Open',
      new Date(),
      new Date(),
      1
    );
    const action = new fromIssuesActions.UpdateIssue(payLoad);
    expect({ ...action }).toEqual({
      type: fromIssuesActions.UPDATE_ISSUE,
      payLoad,
    });
  });

  it('should update an Issues from Actions', () => {
    const payLoad: Issue = new Issue(
      '2121',
      'Two',
      'Two',
      'Major',
      'Open',
      new Date(),
      new Date(),
      1
    );
    const action = new fromIssuesActions.AddIssue(payLoad);
    expect({ ...action }).toEqual({
      type: fromIssuesActions.ADD_ISSUE,
      payLoad,
    });
  });

  it('should delete An Issue from Actions', () => {
    const action = new fromIssuesActions.DeleteIssue();
    expect({ ...action }).toEqual({ type: fromIssuesActions.DELETE_ISSUE });
  });

  it('should pass on index when started  editing an action ', () => {
    const payLoad = 1;
    const action = new fromIssuesActions.StartEditing(payLoad);
    expect({ ...action }).toEqual({
      type: fromIssuesActions.START_EDIT,
      payLoad,
    });
  });

  it('should pass on stop editing when started  editing an action ', () => {
    const action = new fromIssuesActions.StopEditing();
    expect({ ...action }).toEqual({
      type: fromIssuesActions.STOP_EDIT,
    });
  });

  it('should pass on toggle severity when started  editing an action ', () => {
    const action = new fromIssuesActions.ToggleIssueSeverity();
    expect({ ...action }).toEqual({
      type: fromIssuesActions.TOGGLE_ISSUE_SEVERITY,
    });
  });

  it('should pass on toggle s status when started  editing an action ', () => {
    const action = new fromIssuesActions.ToggleIssueStatus();
    expect({ ...action }).toEqual({
      type: fromIssuesActions.TOGGLE_ISSUE_STATUS,
    });
  });

  it('should pass on toggle created data when started  editing an action ', () => {
    const action = new fromIssuesActions.ToggleIssueCreatedDate();
    expect({ ...action }).toEqual({
      type: fromIssuesActions.TOGGLE_ISSUE_CREATED_DATE,
    });
  });

  it('should pass on toggle resolved date when started editing an action ', () => {
    const action = new fromIssuesActions.ToggleIssueResolvedDate();
    expect({ ...action }).toEqual({
      type: fromIssuesActions.TOGGLE_ISSUE_RESOLVED_DATE,
    });
  });
});
