import { NgModule, enableProdMode, PLATFORM_DIRECTIVES, provide }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';

import { bootstrap } from '@angular/platform-browser-dynamic';
import { AppComponent, environment } from './';
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';

import { FlexDirective }  from './flex.directive';
import { LayoutDirective }  from './layout.directive';
import { LoginService }  from './services/login.service';
import { SalaryService }  from './services/salary.service';
import { TimeService }  from './services/time.service';
import {disableDeprecatedForms, provideForms} from '@angular/forms';

import { MdButton } from '@angular2-material/button/button';
import { MdInput } from '@angular2-material/input/input';

import { AppRoutes } from './app.routing';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [LoginService,
    SalaryService,
    TimeService,
    provideForms(),
    disableDeprecatedForms(),
    FIREBASE_PROVIDERS,
    AppRoutes,
    MdButton,
    MdInput,
    { provide: FlexDirective, useValue: FlexDirective },
    { provide: LayoutDirective, useValue: LayoutDirective },
    defaultFirebase({
      apiKey: "AIzaSyCJtm1eKZS-HEa7G665jrGkKFuQCgx7YNo",
    authDomain: "dynasty-ultimate-ff.firebaseapp.com",
    databaseURL: "https://dynasty-ultimate-ff.firebaseio.com",
    storageBucket: "dynasty-ultimate-ff.appspot.com"
    }),],
  bootstrap: [AppComponent],
})
export class AppModule { }