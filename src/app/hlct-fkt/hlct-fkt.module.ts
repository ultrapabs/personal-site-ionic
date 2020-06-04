import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HlctFktPageRoutingModule } from './hlct-fkt-routing.module';
import { HlctFktPage } from './hlct-fkt.page';
import { HeaderBarModule } from '../header-bar/header-bar.module';
import { AgmCoreModule } from '@agm/core';
import { environment } from '../../environments/environment';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderBarModule,
    HlctFktPageRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: environment['googleMapKey']
    })
  ],
  declarations: [
    HlctFktPage
  ]
})
export class HlctFktPageModule {}
