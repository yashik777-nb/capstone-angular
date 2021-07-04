import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { User } from '../modal/user.modal';
import { IssuesService } from '../services/issues.service';

import { IssuesComponent } from './issues.component';

describe('IssuesComponent', () => {
  let component: IssuesComponent;
  let fixture: ComponentFixture<IssuesComponent>;

  const mockStore = {
    select: (...params) => {
      if (params.includes('userData'))
        return of({
          user: new User('', '', '', '', '', '', 0),
          authenticated: false,
        });
      if (params.includes('issuesList'))
        return of({
          issueSeverityFlag: true,
          issueStatusFlag: true,
          issueCreatedDateFlag: true,
          issueResolvedDateFlag: true,
        });
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [IssuesComponent],
      providers: [IssuesService, { provide: Store, useValue: mockStore }],
    }).compileComponents();
    fixture = TestBed.createComponent(IssuesComponent);
    component = fixture.debugElement.nativeElement;
  });

  it('should create Issues Component', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
