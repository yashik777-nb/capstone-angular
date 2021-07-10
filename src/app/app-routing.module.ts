import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddEditIssueComponent } from './issues/add-edit-issue/add-edit-issue.component';
import { IssueDetailActivateGaurd } from './issues/guards/issueDetail-gaurd.service';
import { AddIssueActivateGaurd } from './issues/guards/newIssue-gaurd.service';
import { IssuesComponent } from './issues/issues.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: IssuesComponent,
    pathMatch: 'full',
  },
  {
    path: 'issues',
    component: IssuesComponent,
  },
  {
    path: 'issues/:id/:mode',
    component: AddEditIssueComponent,
    canActivate: [IssueDetailActivateGaurd],
  },
  {
    path: 'add-issue/:mode',
    component: AddEditIssueComponent,
    canActivate: [AddIssueActivateGaurd],
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./profile/profile.routing.module').then(
        (m) => m.ProfileRoutingModule
      ),
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
