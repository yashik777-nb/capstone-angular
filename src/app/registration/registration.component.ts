import { Component, OnInit } from '@angular/core';
import { faUserLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  faSignIn = faUserLock;
  constructor() {}

  ngOnInit(): void {}
}
