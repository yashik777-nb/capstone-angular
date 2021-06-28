import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Issue } from '../modal/issue.modal';
import { IssuesService } from '../services/issues.service';

import * as fromApp from '../store/app.reducer';
import * as fromIssuesActions from '../issues/store/actions/issues.actions';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css'],
})
export class IssuesComponent implements OnInit, OnDestroy {
  // issues: Issue[];
  issues: Observable<{ issues: Issue[] }>;
  isuesSubscription: Subscription;
  userAuthenticated: boolean = false;
  username: string;

  issueSeverityFlag: boolean = true;
  issueStatusFlag: boolean = true;
  issueCreatedDateFlag: boolean = true;
  issueResolvedDateFlag: boolean = true;

  searchDescription: string;

  constructor(
    private _issuesService: IssuesService,
    private store: Store<fromApp.AppState>
  ) {}

  ngOnInit(): void {
    this._issuesService.getIssues();
    this.issues = this.store.select('issuesList');
    this.store.select('userData').subscribe((storeData) => {
      if (storeData.user.id === '') {
        this.userAuthenticated = false;
      } else {
        this.userAuthenticated = true;
        this.username = storeData.user.firstname;
      }
    });

    this.store.select('issuesList').subscribe((stateDate) => {
      this.issueSeverityFlag = stateDate.issueSeverityFlag;
      this.issueStatusFlag = stateDate.issueStatusFlag;
      this.issueCreatedDateFlag = stateDate.issueCreatedDateFlag;
      this.issueResolvedDateFlag = stateDate.issueResolvedDateFlag;
    });
  }

  getIssues(): void {
    // this.isuesSubscription = this._issuesService.getIssues().subscribe(
    //   (issues: Issue[]) => (this.issues = issues),
    //   (err) => console.log(err)
    // );
  }

  onSearch() {
    this.store.dispatch(
      new fromIssuesActions.FilterIssues(this.searchDescription)
    );
  }

  ngOnDestroy() {
    // this.isuesSubscription.unsubscribe();
  }
}
