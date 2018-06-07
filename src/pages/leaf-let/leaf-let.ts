import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as L from 'leaflet';


@IonicPage()
@Component({
  selector: 'page-leaf-let',
  templateUrl: 'leaf-let.html',
})
export class LeafLetPage {
	public data;
	public title;
	public lat;
	public long;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.data = this.navParams.get('data');
  	console.log(this.data);
  	this.title = this.data.title;
  	this.lat = this.data.lat;
  	this.long =this.data.long;

  }

ngOnInit(): void {
var mymap = L.map('mapid').setView([this.lat, this.long],12);
L.marker([this.lat, this.long]).addTo(mymap);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    // attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoidmliaW5mbG9nZXMiLCJhIjoiY2phMG01Njg0OHUxdDMzbGc0enF1c2g5ZSJ9.ru5cK3HEdK2V_relFMhMig'
}).addTo(mymap);


}

}
