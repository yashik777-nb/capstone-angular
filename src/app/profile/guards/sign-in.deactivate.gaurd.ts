import { Observable } from 'rxjs';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
} from '@angular/router';
import { SignInComponent } from '../sign-in/sign-in.component';

export class SignInDeactivateGaurd implements CanDeactivate<SignInComponent> {
  canDeactivate(
    component: SignInComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    console.log('[Touched]', component.signInForm.touched);
    console.log('[Submitted]', component.submitted);
    if (component.signInForm.touched && !component.submitted)
      return confirm('Are you sure you want to leave?');
    else return true;
  }
}
