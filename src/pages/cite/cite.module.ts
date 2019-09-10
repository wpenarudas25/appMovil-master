import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CitePage } from './cite';

@NgModule({
  declarations: [
    CitePage,
  ],
  imports: [
    IonicPageModule.forChild(CitePage),
  ],
})
export class CitePageModule {}
