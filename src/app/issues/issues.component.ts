import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Issue } from '../modal/issue.modal';
import { IssuesService } from '../services/issues.service';

import * as fromApp from '../store/app.reducer';

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

  constructor(
    private _issuesService: IssuesService,
    private store: Store<fromApp.AppState>
  ) {}

  ngOnInit(): void {
    this._issuesService.getIssues();
    this.issues = this.store.select('issuesList');
    this.store.select('userData').subscribe((storeData) => {
      console.log('[IssuesComponent]', storeData);
      if (storeData.user.id === '') {
        this.userAuthenticated = false;
      } else {
        this.userAuthenticated = true;
        this.username = storeData.user.firstname;
      }
    });
  }

  getIssues(): void {
    // this.isuesSubscription = this._issuesService.getIssues().subscribe(
    //   (issues: Issue[]) => (this.issues = issues),
    //   (err) => console.log(err)
    // );
  }

  ngOnDestroy() {
    // this.isuesSubscription.unsubscribe();
  }
}
