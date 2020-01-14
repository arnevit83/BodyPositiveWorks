
import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { HttpClientModule } from  '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/app.Header';

import {NgxPaginationModule} from 'ngx-pagination';
import { Globals } from './globals';

import { SignupComponent } from './Footer/app.Signup';
import { FooterComponent } from './Footer/app.Footer';
import { NavComponent } from './Nav/app.Nav';
import { PageNotFoundComponent } from './PageNotFound/app.PageNotFound';

import { HomeComponent } from './ContentArea/app.Home';


import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';




@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HomeComponent,
    PageNotFoundComponent,
    SignupComponent,
    FooterComponent,
    NavComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    NgxPaginationModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule ,
    FontAwesomeModule,
    HttpClientModule ,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [Title, Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
