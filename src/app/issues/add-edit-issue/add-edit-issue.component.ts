import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {
  faSignInAlt,
  faIdCard,
  faClipboardList,
  faClipboardCheck,
  faCalendarAlt,
} from '@fortawesome/free-solid-svg-icons';

import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import * as fromIssuesActions from '../store/actions/issues.actions';
import * as fromUserActions from '../../profile/store/actions/user.actions';
import { Issue } from 'src/app/modal/issue.modal';

import { DatePickerDirective } from 'ng2-date-picker';
import { DatePickerComponent } from 'ng2-date-picker';
import { ActivatedRoute, Params, Router } from '@angular/router';

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

  @ViewChild('dayPicker') datePicker: DatePickerComponent;
  datePickerConfig = {
    format: 'MM/DD/YYYY',
  };

  constructor(
    private store: Store<fromApp.AppState>,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  open() {
    this.datePicker.api.open();
  }

  close() {
    this.datePicker.api.close();
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => (this.mode = params['mode'])
    );
    this.store
      .select('userData')
      .subscribe((storeData) => (this.authenticated = storeData.authenticated));
    this.store.select('issuesList').subscribe((storeData) => {
      this.editedIssueIndex = storeData.editedIssueIndex;
      this.editedIssue = storeData.editedIssue;
    });
  }
}
