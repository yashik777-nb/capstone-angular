import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';

@Injectable()
export class AddIssueActivateGaurd implements CanActivate {
  constructor(private route: Router, private store: Store<fromApp.AppState>) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    this.store.select('userData').subscribe((storeData) => {
      if (!storeData.authenticated) {
        alert('Not Signed In. Please Sign In to Add Issues');
        this.route.navigate(['sign-in']);
      } else {
      }
    });
    return false;
  }
}
