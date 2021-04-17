import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoinTossPage } from './coin-toss.page';

const routes: Routes = [
  {
    path: '',
    component: CoinTossPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoinTossPageRoutingModule {}
