import { Component, OnInit, ViewChild } from '@angular/core';
import { faSignInAlt, faIdCard } from '@fortawesome/free-solid-svg-icons';

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

  constructor() {}

  ngOnInit(): void {}
}
