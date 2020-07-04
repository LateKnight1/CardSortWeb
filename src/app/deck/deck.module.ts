import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeckPageComponent } from './deck-page/deck-page.component';
import {DeckRoutingModule} from './deck-routing.module';



@NgModule({
  declarations: [DeckPageComponent],
  imports: [
    CommonModule,
    DeckRoutingModule
  ]
})
export class DeckModule { }
