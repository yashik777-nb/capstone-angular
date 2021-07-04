import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Store } from '@ngrx/store';
import { UsersService } from 'src/app/services/users.service';

import { RegistrationComponent } from './registration.component';

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;

  const mockStore = {};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrationComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [UsersService, { provide: Store, useValue: mockStore }],
    }).compileComponents();
    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
  });

  it('should create registration component', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should render registration form inputs', () => {
    let formComponent = fixture.debugElement.nativeElement;
    let firstname = formComponent.querySelector('input[id="firstname"]');
    let lastname = formComponent.querySelector('input[id="lastname"]');
    let username = formComponent.querySelector('input[id="username"]');
    let password = formComponent.querySelector('input[id="password"]');
    let location = formComponent.querySelector('input[id="location"]');
    let mobileNumber = formComponent.querySelector('input[id="mobileNumber"]');

    expect(firstname).toBeTruthy();
    expect(lastname).toBeTruthy();
    expect(username).toBeTruthy();
    expect(password).toBeTruthy();
    expect(location).toBeTruthy();
    expect(mobileNumber).toBeTruthy();
  });

  it(
    'should registration form be valid',
    waitForAsync(() => {
      fixture.detectChanges();

      fixture.whenStable().then(() => {
        let form = component.registrationForm.form;
        let firstname = form.get('firstname');
        let lastname = form.get('lastname');
        let username = form.get('username');
        let password = form.get('password');
        let location = form.get('location');
        let mobileNumber = form.get('mobileNumber');

        firstname.setValue('Yash');
        lastname.setValue('IK');
        username.setValue('yash@abc.com');
        password.setValue('yash');
        location.setValue('UK');
        mobileNumber.setValue(1212);

        expect(form.valid).toBeTruthy();
      });
    })
  );

  it(
    'Firstname should be invalid on registration form',
    waitForAsync(() => {
      fixture.detectChanges();

      fixture.whenStable().then(() => {
        let form = component.registrationForm.form;
        let firstname = form.get('firstname');
        firstname.setValue('');

        expect(firstname.valid).toBe(false);
      });
    })
  );
  it(
    'Lsatname should be invalid on registration form',
    waitForAsync(() => {
      fixture.detectChanges();

      fixture.whenStable().then(() => {
        let form = component.registrationForm.form;
        let lastname = form.get('lastname');
        lastname.setValue('');

        expect(lastname.valid).toBe(false);
      });
    })
  );

  it(
    'Username should be invalid on registration form',
    waitForAsync(() => {
      fixture.detectChanges();

      fixture.whenStable().then(() => {
        let form = component.registrationForm.form;
        let username = form.get('username');
        username.setValue('yash');

        expect(username.valid).toBe(false);
      });
    })
  );

  it(
    'Password should be invalid on registration form',
    waitForAsync(() => {
      fixture.detectChanges();

      fixture.whenStable().then(() => {
        let form = component.registrationForm.form;
        let password = form.get('password');
        password.setValue('');

        expect(password.valid).toBe(false);
      });
    })
  );
});
