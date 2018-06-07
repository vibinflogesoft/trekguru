import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SightDescriptionPage } from './sight-description';

@NgModule({
  declarations: [
    SightDescriptionPage,
  ],
  imports: [
    IonicPageModule.forChild(SightDescriptionPage),
  ],
})
export class SightDescriptionPageModule {}
