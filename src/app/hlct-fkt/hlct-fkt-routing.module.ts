import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HlctFktPage } from './hlct-fkt.page';

const routes: Routes = [
  {
    path: '',
    component: HlctFktPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HlctFktPageRoutingModule {}
