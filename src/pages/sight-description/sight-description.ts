import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-sight-description',
  templateUrl: 'sight-description.html',
})
export class SightDescriptionPage {
	public places;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.places =  this.navParams.get('data');
  	console.log(this.places);
  }
  ionViewDidLoad() {
  }

}
