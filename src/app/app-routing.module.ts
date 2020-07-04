import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/home'},
  {path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule), pathMatch: 'full'},
  {path: 'account', loadChildren: () => import('./account/account.module').then(m => m.AccountModule) },
  {path: 'decks', loadChildren: () => import('./deck/deck.module').then(m => m.DeckModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
