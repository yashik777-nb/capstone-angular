import { FixedSizeVirtualScrollStrategy } from '@angular/cdk/scrolling';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Store } from '@ngrx/store';
import { from } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';

import { SignInComponent } from './sign-in.component';

describe('SignInComponent', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;

  const mockStore = {};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignInComponent],
      imports: [RouterTestingModule, HttpClientTestingModule, FormsModule],
      providers: [UsersService, { provide: Store, useValue: mockStore }],
    }).compileComponents();
    fixture = TestBed.createComponent(SignInComponent);
    component = fixture.componentInstance;
  });

  it('should create Sign In Component', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should render sign in form inputs', () => {
    let formComponent = fixture.debugElement.nativeElement;
    let username = formComponent.querySelector('input[id="username"]');
    let password = formComponent.querySelector('input[id="password"]');

    expect(username).toBeTruthy();
    expect(password).toBeTruthy();
  });

  it(
    'should sing in form be valid',
    waitForAsync(() => {
      fixture.detectChanges();

      fixture.whenStable().then(() => {
        let form = component.signInForm.form;
        let username = form.get('username');
        let password = form.get('password');
        username.setValue('yash@abc.com');
        password.setValue('yash');

        expect(form.valid).toBeTruthy();
      });
    })
  );

  it(
    'Username should be invalid',
    waitForAsync(() => {
      fixture.detectChanges();

      fixture.whenStable().then(() => {
        let form = component.signInForm.form;
        let username = form.get('username');
        username.setValue('yash');

        expect(username.valid).toBe(false);
      });
    })
  );

  it(
    'Password should be invalid',
    waitForAsync(() => {
      fixture.detectChanges();

      fixture.whenStable().then(() => {
        let form = component.signInForm.form;
        let password = form.get('password');
        password.setValue('');

        expect(password.valid).toBe(false);
      });
    })
  );
});
