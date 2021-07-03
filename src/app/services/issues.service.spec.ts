import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { Issue } from '../modal/issue.modal';
import { IssuesService } from './issues.service';

describe('ValueService', () => {
  let service: IssuesService;
  const mockStore = {
    select: () => {
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

  const mockIssues = {
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
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [IssuesService, { provide: Store, useValue: mockStore }],
    });
  });

  it('Issues Service to be created', () => {
    service = TestBed.inject(IssuesService);
    expect(service).toBeTruthy();
  });
});
