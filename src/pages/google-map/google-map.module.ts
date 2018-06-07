import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GoogleMapPage } from './google-map';
import { IonicImageLoader } from 'ionic-image-loader';

@NgModule({
  declarations: [
    GoogleMapPage,
  ],
  imports: [
    IonicPageModule.forChild(GoogleMapPage),
    IonicImageLoader
  ],
})
export class GoogleMapPageModule {}
