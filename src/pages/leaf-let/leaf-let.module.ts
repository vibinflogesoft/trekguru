import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LeafLetPage } from './leaf-let';

@NgModule({
  declarations: [
    LeafLetPage,
  ],
  imports: [
    IonicPageModule.forChild(LeafLetPage),
  ],
})
export class LeafLetPageModule {}
