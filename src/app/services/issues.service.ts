import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Issue } from '../modal/issue.modal';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class IssuesService {
  newIssue = new EventEmitter<Issue>();
  private issuesURL = 'http://localhost:3001/issues';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private _http: HttpClient) {}

  getIssues() {
    return this._http.get(this.issuesURL);
  }

  addIssue(newIssue: Issue) {
    const id = uuidv4();
    newIssue.id = id;
    return this._http.post(this.issuesURL, newIssue, this.httpOptions);
  }
}
