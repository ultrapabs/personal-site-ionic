import { NgModule } from '@angular/core';

import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FooterBarComponent } from './footer-bar.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [
    FooterBarComponent
  ],
  exports: [
    FooterBarComponent
  ]
})
export class FooterBarModule {}
