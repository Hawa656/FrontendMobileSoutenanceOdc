import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FruitsPageRoutingModule } from './fruits-routing.module';

import { FruitsPage } from './fruits.page';
import { FruitsService } from '../../providers/fruits-service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FruitsPageRoutingModule,
  ],
  providers: [
    FruitsService
  ],
  declarations: [FruitsPage]
})
export class FruitsPageModule {}
