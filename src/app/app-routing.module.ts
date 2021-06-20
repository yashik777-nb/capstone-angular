import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { IssuesComponent } from './issues/issues.component';

const routes: Routes = [
  { path: '', component: IssuesComponent, pathMatch: 'full' },
  {
    path: 'issues',
    component: IssuesComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
