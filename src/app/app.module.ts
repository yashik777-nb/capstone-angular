import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { IssuesComponent } from './issues/issues.component';
import { IssuesService } from './services/issues.service';

import { ChartsComponent } from './issues/charts/pie-chart/charts.component';
import { ChartsModule } from 'ng2-charts';
import { AboutComponent } from './about/about.component';
import { SignInComponent } from './profile/sign-in/sign-in.component';
import { RegistrationComponent } from './profile/registration/registration.component';
import { CustomizeComponent } from './issues/customize/customize.component';

import { AddEditIssueComponent } from './issues/add-edit-issue/add-edit-issue.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DoughnutChartComponent } from './issues/charts/doughnut-chart/doughnut-chart.component';

import { StoreModule } from '@ngrx/store';

import * as fromApp from './store/app.reducer';
import { UsersService } from './services/users.service';
import { UserDetailsComponent } from './profile/user-details/user-details.component';

import {
  OwlDateTimeModule,
  OwlNativeDateTimeModule,
} from '@danielmoncada/angular-datetime-picker';

import { DpDatePickerModule } from 'ng2-date-picker';
import { IssueDetailActivateGaurd } from './issues/guards/issueDetail-gaurd.service';
import { AddIssueActivateGaurd } from './issues/guards/newIssue-gaurd.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    IssuesComponent,
    ChartsComponent,
    AboutComponent,
    SignInComponent,
    RegistrationComponent,
    CustomizeComponent,
    AddEditIssueComponent,
    PageNotFoundComponent,
    DoughnutChartComponent,
    UserDetailsComponent,
    // OwlDateTimeModule,
    // OwlNativeDateTimeModule,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule,
    FontAwesomeModule,
    FormsModule,
    DpDatePickerModule,
    StoreModule.forRoot(fromApp.appReducer),
  ],
  providers: [
    IssuesService,
    UsersService,
    IssueDetailActivateGaurd,
    AddIssueActivateGaurd,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
