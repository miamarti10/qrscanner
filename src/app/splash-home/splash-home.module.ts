import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SplashHomePageRoutingModule } from './splash-home-routing.module';

import { SplashHomePage } from './splash-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SplashHomePageRoutingModule
  ],
  declarations: [SplashHomePage]
})
export class SplashHomePageModule {}
