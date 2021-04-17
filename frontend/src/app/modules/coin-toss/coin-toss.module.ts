import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoinTossPageRoutingModule } from './coin-toss-routing.module';

import { CoinTossPage } from './coin-toss.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoinTossPageRoutingModule
  ],
  declarations: [CoinTossPage]
})
export class CoinTossPageModule {}
