import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-tour-places',
  templateUrl: 'tour-places.html',
})
export class TourPlacesPage {
	public specifictour;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.specifictour =this.navParams.get('data');
  	console.log(this.specifictour);
  }
  ionViewDidLoad() {
  }
  getSightDescription(places){
  	this.navCtrl.push('SightDescriptionPage',{data:places});
  }
}

