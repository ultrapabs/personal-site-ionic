import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './tab1/tab1.module#Tab1PageModule'
  },
  {
    path: 'running',
    loadChildren: './tab2/tab2.module#Tab2PageModule'
  },
  {
    path: 'projects',
    loadChildren: './tab3/tab3.module#Tab3PageModule'
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
