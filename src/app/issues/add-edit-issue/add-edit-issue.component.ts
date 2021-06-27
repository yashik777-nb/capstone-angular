import { Component, OnInit, ViewChild } from '@angular/core';
import {
  faSignInAlt,
  faIdCard,
  faClipboardList,
  faClipboardCheck,
} from '@fortawesome/free-solid-svg-icons';

import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import * as fromIssuesActions from '../store/actions/issues.actions';
import * as fromUserActions from '../../profile/store/actions/user.actions';
import { Issue } from 'src/app/modal/issue.modal';

@Component({
  selector: 'app-add-edit-issue',
  templateUrl: './add-edit-issue.component.html',
  styleUrls: ['./add-edit-issue.component.css'],
})
export class AddEditIssueComponent implements OnInit {
  faSignIn = faSignInAlt;
  faIdCard = faIdCard;
  authenticated: boolean = false;
  editedIssueIndex: number = -1;
  editedIssue: Issue;
  severityData: string[] = ['Critical', 'Major', 'Minor'];
  statusData: string[] = ['Open', 'In Progress', 'Closed'];

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit(): void {
    this.store
      .select('userData')
      .subscribe((storeData) => (this.authenticated = storeData.authenticated));

    this.store.select('issuesList').subscribe((storeData) => {
      this.editedIssueIndex = storeData.editedIssueIndex;
      this.editedIssue = storeData.editedIssue;
    });
  }
}
