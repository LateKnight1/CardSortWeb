import {RouterModule, Routes} from '@angular/router';
import {DeckPageComponent} from './deck-page/deck-page.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: DeckPageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DeckRoutingModule {}
