import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { IssuesComponent } from './issues/issues.component';
import { IssuesService } from './services/issues.service';
import { HttpClientModule } from '@angular/common/http';
import { ChartsComponent } from './issues/charts/charts.component';
import { ChartsModule } from 'ng2-charts';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    IssuesComponent,
    ChartsComponent,
    AboutComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ChartsModule],
  providers: [IssuesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
