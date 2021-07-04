import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { Issue } from 'src/app/modal/issue.modal';
import { IssuesService } from 'src/app/services/issues.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Moment } from 'moment';

import { AddEditIssueComponent } from './add-edit-issue.component';
import * as moment from 'moment';

describe('AddEditIssueComponent', () => {
  let component: AddEditIssueComponent;
  let fixture: ComponentFixture<AddEditIssueComponent>;

  const mockStore = {
    select: (...params) => {
      if (params.includes('issuesList'))
        return of({
          issues: [
            new Issue(
              'qwqwqw',
              'One',
              'One',
              'Major',
              'Open',
              new Date(),
              new Date(),
              4
            ),
            new Issue(
              'qwqwqw2',
              'Two',
              'Two',
              'Major',
              'Open',
              new Date(),
              new Date(),
              4
            ),
          ],
        });
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddEditIssueComponent],
      imports: [FormsModule, RouterTestingModule, HttpClientTestingModule],
      providers: [
        IssuesService,
        { provide: Store, useValue: mockStore },
        NG_VALUE_ACCESSOR,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
    fixture = TestBed.createComponent(AddEditIssueComponent);
    component = fixture.debugElement.componentInstance;
    // component.issueCreatedDate = moment(new Date());
    // component.issueResolvedDate = moment(new Date());
  });

  it('should create add/edit issues component', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
