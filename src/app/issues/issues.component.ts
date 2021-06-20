import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Issue } from '../modal/issue.modal';
import { IssuesService } from '../services/issues.service';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css'],
})
export class IssuesComponent implements OnInit, OnDestroy {
  issues: Issue[];
  isuesSubscription: Subscription;

  constructor(private _issuesService: IssuesService) {}

  ngOnInit(): void {
    this.getIssues();
  }

  getIssues(): void {
    this.isuesSubscription = this._issuesService.getIssues().subscribe(
      (issues: any) => {
        this.issues = issues;
        console.log(issues);
      },
      (err) => console.log(err)
    );
  }

  ngOnDestroy() {
    this.isuesSubscription.unsubscribe();
  }
}
