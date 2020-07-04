import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



@NgModule({
  declarations: [HeaderNavComponent],
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
  ],
  exports: [
    HeaderNavComponent,
    BrowserAnimationsModule,
  ]
})
export class NavigationModule { }
