import { issuesListReducer } from './issues.reducer';
import * as fromIssueActions from '../actions/issues.actions';
import { Issue } from 'src/app/modal/issue.modal';

describe('Issues List Reducer', () => {
  it('should have an initial state or default state', () => {
    const expectedState = {
      issues: [],
      issuesCopy: [],
      editedIssue: null,
      editedIssueIndex: -1,
      issueSeverityFlag: true,
      issueStatusFlag: true,
      issueCreatedDateFlag: true,
      issueResolvedDateFlag: true,
    };

    const action = { type: 'test' } as any;
    expect(issuesListReducer(undefined, action)).toEqual(expectedState);
  });

  it('should filter issues state', () => {
    const initialState = {
      issues: [
        new Issue('2121', 'One', 'One', 'Major', 'Open', null, null, 1),
        new Issue('21212', 'Two', 'Two', 'Major', 'Open', null, null, 1),
      ],
      issuesCopy: [
        new Issue('2121', 'One', 'One', 'Major', 'Open', null, null, 1),
        new Issue('21212', 'Two', 'Two', 'Major', 'Open', null, null, 1),
      ],
      editedIssue: null,
      editedIssueIndex: -1,
      issueSeverityFlag: true,
      issueStatusFlag: true,
      issueCreatedDateFlag: true,
      issueResolvedDateFlag: true,
    };
    const payLoad = 'Two';
    const expectedState = {
      issues: [
        new Issue('21212', 'Two', 'Two', 'Major', 'Open', null, null, 1),
      ],
      issuesCopy: [
        new Issue('2121', 'One', 'One', 'Major', 'Open', null, null, 1),
        new Issue('21212', 'Two', 'Two', 'Major', 'Open', null, null, 1),
      ],
      editedIssue: null,
      editedIssueIndex: -1,
      issueSeverityFlag: true,
      issueStatusFlag: true,
      issueCreatedDateFlag: true,
      issueResolvedDateFlag: true,
    };
    const action = {
      type: fromIssueActions.FILTER_ISSUES,
      payLoad,
    } as any;
    expect(issuesListReducer(initialState, action)).toEqual(expectedState);
  });

  it('should update issues State', () => {
    const initialState = {
      issues: [],
      issuesCopy: [],
      editedIssue: null,
      editedIssueIndex: -1,
      issueSeverityFlag: true,
      issueStatusFlag: true,
      issueCreatedDateFlag: true,
      issueResolvedDateFlag: true,
    };
    const payLoad = [
      new Issue('2121', 'Two', 'Two', 'Major', 'Open', null, null, 1),
    ];
    const expectedState = {
      issues: [new Issue('2121', 'Two', 'Two', 'Major', 'Open', null, null, 1)],
      issuesCopy: [
        new Issue('2121', 'Two', 'Two', 'Major', 'Open', null, null, 1),
      ],
      editedIssue: null,
      editedIssueIndex: -1,
      issueSeverityFlag: true,
      issueStatusFlag: true,
      issueCreatedDateFlag: true,
      issueResolvedDateFlag: true,
    };
    const action = {
      type: fromIssueActions.GET_ISSUES,
      payLoad: payLoad,
    } as any;
    expect(issuesListReducer(initialState, action)).toEqual(expectedState);
  });

  it('should add an issue State', () => {
    const initialState = {
      issues: [],
      issuesCopy: [],
      editedIssue: null,
      editedIssueIndex: -1,
      issueSeverityFlag: true,
      issueStatusFlag: true,
      issueCreatedDateFlag: true,
      issueResolvedDateFlag: true,
    };
    const payLoad = new Issue(
      '2121',
      'Two',
      'Two',
      'Major',
      'Open',
      new Date(),
      new Date(),
      1
    );

    const expectedState = {
      issues: [
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
      ],
      issuesCopy: [
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
      ],
      editedIssue: null,
      editedIssueIndex: -1,
      issueSeverityFlag: true,
      issueStatusFlag: true,
      issueCreatedDateFlag: true,
      issueResolvedDateFlag: true,
    };

    const action = {
      type: fromIssueActions.ADD_ISSUE,
      payLoad: payLoad,
    } as any;
    expect(issuesListReducer(initialState, action)).toEqual(expectedState);
  });

  it('should delete an issue State', () => {
    const initialState = {
      issues: [
        new Issue('2121', 'One', 'One', 'Major', 'Open', null, null, 1),
        new Issue('2121', 'Two', 'Two', 'Major', 'Open', null, null, 1),
      ],
      issuesCopy: [
        new Issue('2121', 'One', 'One', 'Major', 'Open', null, null, 1),
        new Issue('2121', 'Two', 'Two', 'Major', 'Open', null, null, 1),
      ],
      editedIssue: new Issue(
        '2121',
        'Two',
        'Two',
        'Major',
        'Open',
        null,
        null,
        1
      ),
      editedIssueIndex: 1,
      issueSeverityFlag: true,
      issueStatusFlag: true,
      issueCreatedDateFlag: true,
      issueResolvedDateFlag: true,
    };
    const expectedState = {
      issues: [new Issue('2121', 'One', 'One', 'Major', 'Open', null, null, 1)],
      issuesCopy: [
        new Issue('2121', 'One', 'One', 'Major', 'Open', null, null, 1),
      ],
      editedIssue: null,
      editedIssueIndex: -1,
      issueSeverityFlag: true,
      issueStatusFlag: true,
      issueCreatedDateFlag: true,
      issueResolvedDateFlag: true,
    };

    const action = {
      type: fromIssueActions.DELETE_ISSUE,
    } as any;
    expect(issuesListReducer(initialState, action)).toEqual(expectedState);
  });

  it('should Start editing an issue State', () => {
    const initialState = {
      issues: [
        new Issue('2121', 'One', 'One', 'Major', 'Open', null, null, 1),
        new Issue('2121', 'Two', 'Two', 'Major', 'Open', null, null, 1),
      ],
      issuesCopy: [
        new Issue('2121', 'One', 'One', 'Major', 'Open', null, null, 1),
        new Issue('2121', 'Two', 'Two', 'Major', 'Open', null, null, 1),
      ],
      editedIssue: null,
      editedIssueIndex: -1,
      issueSeverityFlag: true,
      issueStatusFlag: true,
      issueCreatedDateFlag: true,
      issueResolvedDateFlag: true,
    };
    const payLoad = 0;
    const expectedState = {
      issues: [
        new Issue('2121', 'One', 'One', 'Major', 'Open', null, null, 1),
        new Issue('2121', 'Two', 'Two', 'Major', 'Open', null, null, 1),
      ],
      issuesCopy: [
        new Issue('2121', 'One', 'One', 'Major', 'Open', null, null, 1),
        new Issue('2121', 'Two', 'Two', 'Major', 'Open', null, null, 1),
      ],
      editedIssue: {
        ...new Issue('2121', 'One', 'One', 'Major', 'Open', null, null, 1),
      },
      editedIssueIndex: 0,
      issueSeverityFlag: true,
      issueStatusFlag: true,
      issueCreatedDateFlag: true,
      issueResolvedDateFlag: true,
    };

    const action = {
      type: fromIssueActions.START_EDIT,
      payLoad,
    } as any;
    expect(issuesListReducer(initialState, action)).toEqual(expectedState);
  });

  it('should stop editing an issue State', () => {
    const initialState = {
      issues: [
        new Issue('2121', 'One', 'One', 'Major', 'Open', null, null, 1),
        new Issue('2121', 'Two', 'Two', 'Major', 'Open', null, null, 1),
      ],
      issuesCopy: [
        new Issue('2121', 'One', 'One', 'Major', 'Open', null, null, 1),
        new Issue('2121', 'Two', 'Two', 'Major', 'Open', null, null, 1),
      ],
      editedIssue: {
        ...new Issue('2121', 'One', 'One', 'Major', 'Open', null, null, 1),
      },
      editedIssueIndex: 0,
      issueSeverityFlag: true,
      issueStatusFlag: true,
      issueCreatedDateFlag: true,
      issueResolvedDateFlag: true,
    };
    const payLoad = 0;
    const expectedState = {
      issues: [
        new Issue('2121', 'One', 'One', 'Major', 'Open', null, null, 1),
        new Issue('2121', 'Two', 'Two', 'Major', 'Open', null, null, 1),
      ],
      issuesCopy: [
        new Issue('2121', 'One', 'One', 'Major', 'Open', null, null, 1),
        new Issue('2121', 'Two', 'Two', 'Major', 'Open', null, null, 1),
      ],
      editedIssue: null,
      editedIssueIndex: -1,
      issueSeverityFlag: true,
      issueStatusFlag: true,
      issueCreatedDateFlag: true,
      issueResolvedDateFlag: true,
    };

    const action = {
      type: fromIssueActions.STOP_EDIT,
      payLoad,
    } as any;
    expect(issuesListReducer(initialState, action)).toEqual(expectedState);
  });

  it('should toggle issue severity in issue State', () => {
    const initialState = {
      issues: [],
      issuesCopy: [],
      editedIssue: null,
      editedIssueIndex: -1,
      issueSeverityFlag: true,
      issueStatusFlag: true,
      issueCreatedDateFlag: true,
      issueResolvedDateFlag: true,
    };
    const expectedState = {
      issues: [],
      issuesCopy: [],
      editedIssue: null,
      editedIssueIndex: -1,
      issueSeverityFlag: false,
      issueStatusFlag: true,
      issueCreatedDateFlag: true,
      issueResolvedDateFlag: true,
    };

    const action = {
      type: fromIssueActions.TOGGLE_ISSUE_SEVERITY,
    } as any;
    expect(issuesListReducer(initialState, action)).toEqual(expectedState);
  });

  it('should toggle issue status in issue State', () => {
    const initialState = {
      issues: [],
      issuesCopy: [],
      editedIssue: null,
      editedIssueIndex: -1,
      issueSeverityFlag: true,
      issueStatusFlag: true,
      issueCreatedDateFlag: true,
      issueResolvedDateFlag: true,
    };
    const expectedState = {
      issues: [],
      issuesCopy: [],
      editedIssue: null,
      editedIssueIndex: -1,
      issueSeverityFlag: true,
      issueStatusFlag: false,
      issueCreatedDateFlag: true,
      issueResolvedDateFlag: true,
    };

    const action = {
      type: fromIssueActions.TOGGLE_ISSUE_STATUS,
    } as any;
    expect(issuesListReducer(initialState, action)).toEqual(expectedState);
  });

  it('should toggle issue created date in issue State', () => {
    const initialState = {
      issues: [],
      issuesCopy: [],
      editedIssue: null,
      editedIssueIndex: -1,
      issueSeverityFlag: true,
      issueStatusFlag: true,
      issueCreatedDateFlag: true,
      issueResolvedDateFlag: true,
    };
    const expectedState = {
      issues: [],
      issuesCopy: [],
      editedIssue: null,
      editedIssueIndex: -1,
      issueSeverityFlag: true,
      issueStatusFlag: true,
      issueCreatedDateFlag: false,
      issueResolvedDateFlag: true,
    };

    const action = {
      type: fromIssueActions.TOGGLE_ISSUE_CREATED_DATE,
    } as any;
    expect(issuesListReducer(initialState, action)).toEqual(expectedState);
  });

  it('should toggle issue resolved date in issue State', () => {
    const initialState = {
      issues: [],
      issuesCopy: [],
      editedIssue: null,
      editedIssueIndex: -1,
      issueSeverityFlag: true,
      issueStatusFlag: true,
      issueCreatedDateFlag: true,
      issueResolvedDateFlag: true,
    };
    const expectedState = {
      issues: [],
      issuesCopy: [],
      editedIssue: null,
      editedIssueIndex: -1,
      issueSeverityFlag: true,
      issueStatusFlag: true,
      issueCreatedDateFlag: true,
      issueResolvedDateFlag: false,
    };

    const action = {
      type: fromIssueActions.TOGGLE_ISSUE_RESOLVED_DATE,
    } as any;
    expect(issuesListReducer(initialState, action)).toEqual(expectedState);
  });
});
