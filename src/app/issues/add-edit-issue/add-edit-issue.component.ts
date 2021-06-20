import { Component, OnInit } from '@angular/core';
import { faSignInAlt, faIdCard } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-edit-issue',
  templateUrl: './add-edit-issue.component.html',
  styleUrls: ['./add-edit-issue.component.css'],
})
export class AddEditIssueComponent implements OnInit {
  faSignIn = faSignInAlt;
  faIdCard = faIdCard;

  constructor() {}

  ngOnInit(): void {}
}
