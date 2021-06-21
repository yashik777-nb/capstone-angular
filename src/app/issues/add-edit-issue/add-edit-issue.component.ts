import { Component, OnInit, ViewChild } from '@angular/core';
import { faSignInAlt, faIdCard } from '@fortawesome/free-solid-svg-icons';

import { DatePickerComponent } from 'ng2-date-picker';

@Component({
  selector: 'app-add-edit-issue',
  templateUrl: './add-edit-issue.component.html',
  styleUrls: ['./add-edit-issue.component.css'],
})
export class AddEditIssueComponent implements OnInit {
  faSignIn = faSignInAlt;
  faIdCard = faIdCard;
  authenticated: boolean = false;
  severityData: string[] = ['Critical', 'Major', 'Minor'];
  statusData: string[] = ['Open', 'In Progress', 'Closed'];

  @ViewChild('dayPicker') datePicker: DatePickerComponent;

  constructor() {}

  ngOnInit(): void {}

  open() {
    this.datePicker.api.open();
  }
  close() {
    this.datePicker.api.close();
  }
}
