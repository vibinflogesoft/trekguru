import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TourPlacesPage } from './tour-places';

@NgModule({
  declarations: [
    TourPlacesPage,
  ],
  imports: [
    IonicPageModule.forChild(TourPlacesPage),
  ],
})
export class TourPlacesPageModule {}
