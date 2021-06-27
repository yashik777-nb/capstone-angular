import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import * as fromIssuesActions from '../store/actions/issues.actions';

@Component({
  selector: 'app-customize',
  templateUrl: './customize.component.html',
  styleUrls: ['./customize.component.css'],
})
export class CustomizeComponent implements OnInit {
  issueSeverityFlag: boolean = true;
  issueStatusFlag: boolean = true;
  issueCreatedDateFlag: boolean = true;
  issueResolvedDateFlag: boolean = true;

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit(): void {}

  onIssueSeverityToggle() {
    this.store.dispatch(new fromIssuesActions.ToggleIssueSeverity());
  }
  onIssueStatusToggle() {
    this.store.dispatch(new fromIssuesActions.ToggleIssueStatus());
  }
  onIssueCreatedDateToggle() {
    this.store.dispatch(new fromIssuesActions.ToggleIssueCreatedDate());
  }
  onIssueResolvedDateToggle() {
    this.store.dispatch(new fromIssuesActions.ToggleIssueResolvedDate());
  }
}
