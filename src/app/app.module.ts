import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from '@angular/router';
import { SignUpComponent } from './visiter/sign-up/sign-up.component';
import { LogInComponent } from './visiter/log-in/log-in.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LogInComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
