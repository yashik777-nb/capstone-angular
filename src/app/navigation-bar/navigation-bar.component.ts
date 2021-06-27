import { Component, OnInit } from '@angular/core';
import { faHome } from '@fortawesome/free-solid-svg-icons';

import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import * as fromUserActions from '../profile/store/actions/user.actions';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css'],
})
export class NavigationBarComponent implements OnInit {
  faHome = faHome;
  authenticated: boolean = false;
  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit(): void {
    this.store
      .select('userData')
      .subscribe((storeData) => (this.authenticated = storeData.authenticated));
  }

  onLogout() {
    this.store.dispatch(new fromUserActions.LogoutUser());
  }
}
