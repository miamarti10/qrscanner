import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SplashHomePage } from './splash-home.page';

const routes: Routes = [
  {
    path: '',
    component: SplashHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SplashHomePageRoutingModule {}
