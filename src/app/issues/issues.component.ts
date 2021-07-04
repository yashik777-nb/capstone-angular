import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Issue } from '../modal/issue.modal';
import { IssuesService } from '../services/issues.service';

import * as fromApp from '../store/app.reducer';
import * as fromIssuesActions from '../issues/store/actions/issues.actions';
import { ActivatedRoute, Router } from '@angular/router';

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

  searchDescriptionMobile: string;

  constructor(
    private _issuesService: IssuesService,
    private store: Store<fromApp.AppState>,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._issuesService.getIssues();
    this.issues = this.store.select('issuesList');
    this.store.select('userData').subscribe((storeData) => {
      this.userAuthenticated = storeData.authenticated;
      this.username = storeData.user.firstname;
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
      new fromIssuesActions.FilterIssues(this.searchDescriptionMobile)
    );
  }

  ngOnDestroy() {
    // this.isuesSubscription.unsubscribe();
  }

  navigateToIssueDetails(i: string) {
    this.store.dispatch(new fromIssuesActions.StartEditing(+i));
    if (this.route.snapshot.url.length > 0)
      this.router.navigate(['issues', i + 1, 'edit']);
    else
      this.router.navigate(['issues', i + 1, 'edit'], {
        relativeTo: this.route,
      });
    // console.log(issueDescription);
  }
}
