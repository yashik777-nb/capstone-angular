import { Component, OnInit } from '@angular/core';
import { faHome } from '@fortawesome/free-solid-svg-icons';

import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import * as fromIssuesActions from '../issues/store/actions/issues.actions';
import * as fromUserActions from '../profile/store/actions/user.actions';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../modal/user.modal';
@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css'],
})
export class NavigationBarComponent implements OnInit {
  faHome = faHome;
  authenticated$: Observable<boolean>;
  searchDescription: string = '';
  constructor(private store: Store<fromApp.AppState>, private router: Router) {}

  ngOnInit(): void {
    this.authenticated$ = this.store.select('userData', 'authenticated');
  }

  onLogout() {
    this.store.dispatch(new fromUserActions.LogoutUser());
    this.router.navigate(['']);
  }

  onSearch() {
    this.store.dispatch(
      new fromIssuesActions.FilterIssues(this.searchDescription)
    );
  }
}
