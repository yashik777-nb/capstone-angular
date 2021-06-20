import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddEditIssueComponent } from './issues/add-edit-issue/add-edit-issue.component';
import { IssuesComponent } from './issues/issues.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegistrationComponent } from './profile/registration/registration.component';
import { SignInComponent } from './profile/sign-in/sign-in.component';

const routes: Routes = [
  { path: '', component: IssuesComponent, pathMatch: 'full' },
  {
    path: 'issues',
    component: IssuesComponent,
  },
  {
    path: 'issues/:issueDescription',
    component: AddEditIssueComponent,
  },
  {
    path: 'issues/add-issue',
    component: AddEditIssueComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'sign-in',
    component: SignInComponent,
  },
  {
    path: 'register',
    component: RegistrationComponent,
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
