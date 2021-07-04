import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { Issue } from 'src/app/modal/issue.modal';
import { IssuesService } from 'src/app/services/issues.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AddEditIssueComponent } from './add-edit-issue.component';
import * as moment from 'moment';
import { User } from 'src/app/modal/user.modal';
import { Routes } from '@angular/router';
import { DpDatePickerModule } from 'ng2-date-picker';

describe('AddEditIssueComponent', () => {
  let component: AddEditIssueComponent;
  let fixture: ComponentFixture<AddEditIssueComponent>;

  const routes: Routes = [
    {
      path: 'issues/:id/:mode',
      component: AddEditIssueComponent,
    },
  ];

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

      if (params.includes('userData'))
        return of({
          user: new User(
            '121212',
            'yash@abc.com',
            'yash',
            'Yash',
            'IK',
            'UK',
            12121212
          ),
          authenticated: true,
        });
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddEditIssueComponent],
      imports: [
        FormsModule,
        RouterTestingModule,
        HttpClientTestingModule,
        DpDatePickerModule,
      ],
      providers: [IssuesService, { provide: Store, useValue: mockStore }],
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
