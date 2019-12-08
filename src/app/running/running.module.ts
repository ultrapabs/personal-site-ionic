import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RunningPage } from './running.page';
import { HeaderBarModule } from '../header-bar/header-bar.module';
import { RaceFilterPipe } from '../pipe/race-filter.pipe';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HeaderBarModule,
    RouterModule.forChild([{ path: '', component: RunningPage }])
  ],
  declarations: [
    RaceFilterPipe,
    RunningPage
  ]
})
export class RunningPageModule {}
