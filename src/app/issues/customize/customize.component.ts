import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customize',
  templateUrl: './customize.component.html',
  styleUrls: ['./customize.component.css'],
})
export class CustomizeComponent implements OnInit {
  issueSeverityFlag: boolean = true;
  issueStatusFlag: boolean = true;
  issueCreatedDateFlag: boolean = true;
  issueResolvedDateFlag: boolean = true;

  constructor() {}

  ngOnInit(): void {}
}
