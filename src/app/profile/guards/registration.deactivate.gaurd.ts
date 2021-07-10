import { Observable } from 'rxjs';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
} from '@angular/router';
import { RegistrationComponent } from '../registration/registration.component';

export class RegistrationDeactivateGaurd
  implements CanDeactivate<RegistrationComponent>
{
  canDeactivate(
    component: RegistrationComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    console.log('[Touched]', component.registrationForm.touched);
    console.log('[Submitted]', component.submitted);
    if (component.registrationForm.touched && !component.submitted)
      return confirm('Are you sure you want to leave?');
    else return true;
  }
}
