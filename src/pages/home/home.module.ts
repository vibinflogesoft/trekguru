import { NgModule } from '@angular/core';
import { IonicPageModule,IonicPage} from 'ionic-angular';
import { HomePage } from './home';
 
@IonicPage()
@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
  ],
  exports: [
    HomePage
  ]
})
export class HomePageModule {}