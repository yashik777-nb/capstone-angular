import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { IssuesComponent } from './issues/issues.component';
import { IssuesService } from './services/issues.service';
import { HttpClientModule } from '@angular/common/http';
import { ChartsComponent } from './issues/charts/charts.component';
import { ChartsModule } from 'ng2-charts';
import { AboutComponent } from './about/about.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RegistrationComponent } from './registration/registration.component';
import { CustomizeComponent } from './customize/customize.component';
import { FormsModule } from '@angular/forms';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule,
    FontAwesomeModule,
    FormsModule,
  ],
  providers: [IssuesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
