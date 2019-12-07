import { NgModule } from '@angular/core';

import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { HeaderBarComponent } from '../header-bar/header-bar.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [
    HeaderBarComponent
  ],
  exports: [
    HeaderBarComponent
  ]
})
export class HeaderBarModule {}
