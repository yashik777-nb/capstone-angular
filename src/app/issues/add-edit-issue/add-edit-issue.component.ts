import { Component, OnInit, ViewChild } from '@angular/core';
import {
  faSignInAlt,
  faIdCard,
  faClipboardList,
  faCalendarAlt,
} from '@fortawesome/free-solid-svg-icons';

import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import * as fromIssuesActions from '../store/actions/issues.actions';

import { Issue } from 'src/app/modal/issue.modal';

import { DatePickerComponent } from 'ng2-date-picker';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Moment } from 'moment';
import { IssuesService } from 'src/app/services/issues.service';

@Component({
  selector: 'app-add-edit-issue',
  templateUrl: './add-edit-issue.component.html',
  styleUrls: ['./add-edit-issue.component.css'],
})
export class AddEditIssueComponent implements OnInit {
  faSignIn = faSignInAlt;
  faIdCard = faIdCard;
  faCalendarAlt = faCalendarAlt;
  faClipboardList = faClipboardList;
  authenticated: boolean = false;
  editedIssueIndex: number = -1;
  mode: string;
  editedIssue: Issue;
  severityData: string[] = ['Critical', 'Major', 'Minor'];
  statusData: string[] = ['Open', 'In Progress', 'Closed'];

  @ViewChild('f') issueForm: NgForm;

  @ViewChild('dayPicker') datePicker: DatePickerComponent;
  datePickerConfig = {
    format: 'MM/DD/YYYY',
  };
  issueCreatedDate: Moment;
  issueCreatedDateFlag: boolean = false;
  issueResolvedDate: Moment;
  issueResolvedDateFlag: boolean = false;

  constructor(
    private store: Store<fromApp.AppState>,
    private router: Router,
    private route: ActivatedRoute,
    private issuesService: IssuesService
  ) {}

  open() {
    this.datePicker.api.open();
  }

  close() {
    this.datePicker.api.close();
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.mode = params['mode'];
      this.store
        .select('userData')
        .subscribe(
          (storeData) => (this.authenticated = storeData.authenticated)
        );
      if (params['mode'] === 'edit') {
        this.store.select('issuesList').subscribe((storeData) => {
          this.editedIssueIndex = storeData.editedIssueIndex;
          this.editedIssue = storeData.editedIssue;
        });
      }
    });
  }

  onIssueCreatedDateChange() {
    this.issueCreatedDateFlag = false;
  }
  onIssueResolvedDateChange() {
    this.issueResolvedDateFlag = false;
  }

  onFormSubmit(form: NgForm) {
    if (form.value.issueCreatedDate === undefined) {
      this.issueCreatedDateFlag = true;
      return;
    }
    if (form.value.issueResolvedDate === undefined) {
      this.issueResolvedDateFlag = true;
      return;
    }
    if (this.mode === 'new') {
      const newIssue = new Issue(
        '',
        form.value.issueTitle,
        form.value.issueDescription,
        form.value.issueSeverity,
        form.value.issueStatus,
        form.value.issueCreatedDate.toDate(),
        form.value.issueCreatedDate.toDate(),
        1
      );
      this.issuesService.addIssue(newIssue).subscribe((issue: Issue) => {
        this.store.dispatch(new fromIssuesActions.AddIssue(issue));
        this.router.navigate(['']);
      });
    } else {
      const updatedIssue = new Issue(
        this.editedIssue.id,
        this.editedIssue.issueTitle,
        this.editedIssue.issueDescription,
        form.controls['issueSeverity'].touched &&
        form.value.issueSeverity !== this.editedIssue.issueSeverity
          ? form.value.issueSeverity
          : this.editedIssue.issueSeverity,
        form.controls['issueStatus'].touched &&
        form.value.issueStatus !== this.editedIssue.issueStatus
          ? form.value.issueStatus
          : this.editedIssue.issueStatus,
        form.value.issueCreatedDate.toDate(),
        form.value.issueResolvedDate.toDate(),
        this.editedIssue.views + 1
      );
      this.issuesService.updateIssue(updatedIssue).subscribe((issue: Issue) => {
        this.store.dispatch(new fromIssuesActions.UpdateIssue(issue));
        this.router.navigate(['']);
      });
    }
  }

  navigateToSignIn() {
    this.router.navigate(['sign-in']);
  }

  onIssueDelete() {
    this.issuesService.deleteIssue(this.editedIssue.id).subscribe(() => {
      this.store.dispatch(new fromIssuesActions.DeleteIssue());
      this.router.navigate(['']);
    });
  }
}
