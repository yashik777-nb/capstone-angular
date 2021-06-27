import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { User } from 'src/app/modal/user.modal';
import { UsersService } from 'src/app/services/users.service';

import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import * as fromUserActions from '../store/actions/user.actions';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit, OnDestroy {
  faSignIn = faSignInAlt;

  @ViewChild('f', { static: false }) signInForm: NgForm;
  userNotFound: boolean = false;
  subscription: Subscription = new Subscription();

  constructor(
    private router: Router,
    private usersService: UsersService,
    private store: Store<fromApp.AppState>
  ) {}

  ngOnInit(): void {}

  onSignInFormSubmit(form: NgForm) {
    this.subscription = this.usersService.login().subscribe((users: User[]) => {
      let userFound = {
        ...users.filter((user: User) => {
          if (
            user.username === form.value.username &&
            user.password == form.value.password
          ) {
            return user;
          }
        })[0],
      };
      if (userFound.id) {
        console.log('User Found');
        console.log(userFound);
        this.store.dispatch(new fromUserActions.AuthenticateUser(userFound));
        this.router.navigate(['issues']);
      } else {
        console.log('User Not Found');
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
