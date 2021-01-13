import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {SignUpComponent} from './visiter/sign-up/sign-up.component';
import {LogInComponent} from './visiter/log-in/log-in.component';



const routes: Routes = [
  { path: 'signup', component: SignUpComponent },
  { path: 'login', component: LogInComponent },
];
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule,
    CommonModule
  ]
})
export class AppRoutingModule { }
