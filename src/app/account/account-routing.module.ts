import {RouterModule, Routes} from '@angular/router';
import {AccountPageComponent} from './account-page/account-page.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: AccountPageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AccountRoutingModule {}
