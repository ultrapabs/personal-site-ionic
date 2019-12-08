import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { HeaderBarModule } from '../header-bar/header-bar.module';
import { RaceFilterPipe } from '../pipe/race-filter.pipe';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HeaderBarModule,
    RouterModule.forChild([{ path: '', component: Tab2Page }])
  ],
  declarations: [
    RaceFilterPipe,
    Tab2Page
  ]
})
export class Tab2PageModule {}
