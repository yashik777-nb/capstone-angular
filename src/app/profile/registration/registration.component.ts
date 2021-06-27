import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faUserLock } from '@fortawesome/free-solid-svg-icons';

import { Store } from '@ngrx/store';
import { UsersService } from 'src/app/services/users.service';
import * as fromApp from '../../store/app.reducer';
import * as fromUserActions from '../store/actions/user.actions';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  faSignIn = faUserLock;

  constructor(
    private store: Store<fromApp.AppState>,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {}

  onRegister(form: NgForm) {
    console.log(form.value.firstname);
    console.log(form.value.lastname);
    console.log(form.value.username);
    console.log(form.value.password);
    console.log(form.value.location);
    console.log(form.value.mobileNumber);
  }
}
