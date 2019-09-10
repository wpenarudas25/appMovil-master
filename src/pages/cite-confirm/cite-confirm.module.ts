import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CiteConfirmPage } from './cite-confirm';

@NgModule({
  declarations: [
    CiteConfirmPage,
  ],
  imports: [
    IonicPageModule.forChild(CiteConfirmPage),
  ],
})
export class CiteConfirmPageModule {}
