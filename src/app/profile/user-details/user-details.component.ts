import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/modal/user.modal';

import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  user$: Observable<User>;
  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit(): void {
    this.user$ = this.store.select('userData', 'user');
  }
}
