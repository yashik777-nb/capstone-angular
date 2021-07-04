import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { faUserLock } from '@fortawesome/free-solid-svg-icons';

import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { User } from 'src/app/modal/user.modal';
import { UsersService } from 'src/app/services/users.service';
import * as fromApp from '../../store/app.reducer';
import * as fromUserActions from '../store/actions/user.actions';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit, OnDestroy {
  faSignIn = faUserLock;
  subscription: Subscription;

  @ViewChild('f', { static: false }) registrationForm: NgForm;

  constructor(
    private store: Store<fromApp.AppState>,
    private usersService: UsersService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onRegister(form: NgForm) {
    const user = new User(
      '',
      form.value.username,
      form.value.password,
      form.value.firstname,
      form.value.lastname,
      form.value.location,
      +form.value.mobileNumber
    );
    this.subscription = this.usersService
      .createUser(user)
      .subscribe((newUser: User) => {
        this.store.dispatch(new fromUserActions.AuthenticateUser(newUser));
        this.router.navigate(['issues']);
      });
  }

  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
  }
}
