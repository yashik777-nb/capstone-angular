import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { User } from '../modal/user.modal';
import { UsersService } from './users.service';

describe('ValueService', () => {
  let service: UsersService;
  const mockStore = {
    select: () => {
      return of({
        user: new User(
          'qwqwqw',
          'yash@abc.com',
          'yash',
          'Yash',
          'IK',
          'UK',
          1212121212
        ),
        authenticated: false,
      });
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UsersService, { provide: Store, useValue: mockStore }],
    });
  });

  it('Issues Service to be created', () => {
    service = TestBed.inject(UsersService);
    expect(service).toBeTruthy();
  });
});
