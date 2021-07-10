import { SignInComponent } from './sign-in/sign-in.component';
import { RegistrationComponent } from './registration/registration.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { UserDetailsComponent } from './user-details/user-details.component';
import { SignInDeactivateGaurd } from './guards/sign-in.deactivate.gaurd';
import { RegistrationDeactivateGaurd } from './guards/registration.deactivate.gaurd';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'sign-in',
        component: SignInComponent,
        canDeactivate: [SignInDeactivateGaurd],
      },
      {
        path: 'register',
        component: RegistrationComponent,
        canDeactivate: [RegistrationDeactivateGaurd],
      },
      { path: 'user-details', component: UserDetailsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
