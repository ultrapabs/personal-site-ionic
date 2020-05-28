import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HlctFktPageRoutingModule } from './hlct-fkt-routing.module';
import { HlctFktPage } from './hlct-fkt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HlctFktPageRoutingModule
  ],
  declarations: [HlctFktPage]
})
export class HlctFktPageModule {}
