import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	public gallerry;
      public clubDetails;
  constructor(public navCtrl: NavController) {
    this.clubDetails = [
{
id: 34,
clubName: 'Fitzme',
located: 'Amsterdam',
isChecked:true
},
{
id: 35,
clubName: 'Feel Good',
located: 'Holand',
isChecked:false
}]
  	this.gallerry=[
  		{image:'assets/imgs/palakkad.jpg',title:'Kasaragod',subtitle:'gods own country',decs:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',  
               slider:[
                        {image:'assets/imgs/malappuram.jpg'},
                        {image:'assets/imgs/palakkad.jpg'},
                        {image:'assets/imgs/thiruvananthapuram.jpg'}
                        ],
                 specialities:[
                      {title:'Bekal Fort',subtitle:'',image:'assets/imgs/kannur.jpg'},
                      {title:'Ranipuram',subtitle:'',image:'assets/imgs/theyyam.jpg'},
                      {title:'Chandargiri Fort',subtitle:'',image:'assets/imgs/thiruvananthapuram.jpg'}
                 ]
              },
  		{image:'assets/imgs/theyyam.jpg',title:'Kannur',subtitle:'gods own country',decs:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
              slider:[
                        {image:'assets/imgs/kannur.jpg'},
                        {image:'assets/imgs/theyyam.jpg'},
                        {image:'assets/imgs/thiruvananthapuram.jpg'}
                        ],
                 specialities:[
                      {title:'Payyambalam Beach',subtitle:'',image:'assets/imgs/kannur.jpg'},
                      {title:'Muzhappilangad Drive-in Beach',subtitle:'',image:'assets/imgs/theyyam.jpg'},
                      {title:'Palakkayam Thattu',subtitle:'',image:'assets/imgs/thiruvananthapuram.jpg'}
                 ]
             },
  		{image:'assets/imgs/wayanadu.jpg',title:'Wayanadu',subtitle:'gods own country',decs:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
              slider:[
                        {image:'assets/imgs/kannur.jpg'},
                        {image:'assets/imgs/palakkad.jpg'},
                        {image:'assets/imgs/thiruvananthapuram.jpg'}
                        ],
             specialities:[
                      {title:'Chembra Peak',subtitle:'',image:'assets/imgs/kannur.jpg'},
                      {title:'Edakkal Caves',subtitle:'',image:'assets/imgs/theyyam.jpg'},
                      {title:'Meenmutty waterfalls',subtitle:'',image:'assets/imgs/thiruvananthapuram.jpg'}
             ]
              },
  		{image:'assets/imgs/kozhikkode.jpg',title:'kozhikkode',subtitle:'gods own country',decs:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book', 
              slider:[
                        {image:'assets/imgs/thiruvananthapuram.jpg'},
                        {image:'assets/imgs/thiruvananthapuram.jpg'},
                        {image:'assets/imgs/malappuram.jpg'}
                        ],
             specialities:[
                      {title:'Kozhikode Beach',subtitle:'',image:'assets/imgs/kannur.jpg'},
                      {title:'Mananchira Square',subtitle:'',image:'assets/imgs/theyyam.jpg'},
                      {title:'Thusharagiri Waterfalls',subtitle:'',image:'assets/imgs/thiruvananthapuram.jpg'}
             ]
              },
  		{image:'assets/imgs/malappuram.jpg',title:'Malappuram',subtitle:'gods own country',decs:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book', 
                slider:[
                        {image:'assets/imgs/thiruvananthapuram.jpg'},
                        {image:'assets/imgs/kozhikkode.jpg'},
                        {image:'assets/imgs/thiruvananthapuram.jpg'}
                        ],
             specialities:[
                      {title:'Kottakkunnu',subtitle:'',image:'assets/imgs/kannur.jpg'},
                      {title:'Kodikuthimala',subtitle:'',image:'assets/imgs/theyyam.jpg'},
                      {title:'Nilambur Teak Museum',subtitle:'',image:'assets/imgs/thiruvananthapuram.jpg'}
             ]
                },
  		{image:'assets/imgs/palakkad.jpg',title:'Palakkad',subtitle:'gods own country',decs:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book', 
              slider:[
                        {image:'assets/imgs/palakkad.jpg'},
                        {image:'assets/imgs/palakkad.jpg'},
                        {image:'assets/imgs/thiruvananthapuram.jpg'}
                        ],
             specialities:[
                      {title:'',subtitle:'',image:'assets/imgs/kannur.jpg'},
                      {title:'',subtitle:'',image:'assets/imgs/theyyam.jpg'},
                      {title:'',subtitle:'',image:'assets/imgs/thiruvananthapuram.jpg'}
             ]
              },
  		{image:'assets/imgs/thrissur.jpg',title:'Thrissur',subtitle:'gods own country',decs:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book', 
              slider:[
                        {image:'assets/imgs/thiruvananthapuram.jpg'},
                        {image:'assets/imgs/malappuram.jpg'},
                        {image:'assets/imgs/kozhikkode.jpg'}
                        ],
             specialities:[
                      {title:'Malampuzha Dam',subtitle:'',image:'assets/imgs/kannur.jpg'},
                      {title:'Seethargundu Viewpoint',subtitle:'',image:'assets/imgs/theyyam.jpg'},
                      {title:'Nelliyampathy hills',subtitle:'',image:'assets/imgs/thiruvananthapuram.jpg'}
             ]
              },
  		{image:'assets/imgs/kochi.jpg',title:'Ernakulam',subtitle:'gods own country',decs:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book', 
              slider:[
                        {image:'assets/imgs/palakkad.jpg'},
                        {image:'assets/imgs/kannur.jpg'},
                        {image:'assets/imgs/palakkad.jpg'}
                        ],
             specialities:[
                      {title:'BhoothathanKettu Dam & Reserve Forest',subtitle:'',image:'assets/imgs/kannur.jpg'},
                      {title:'Fort Kochi',subtitle:'',image:'assets/imgs/theyyam.jpg'},
                      {title:'Cherai Beach',subtitle:'',image:'assets/imgs/thiruvananthapuram.jpg'}
             ]
              },
  		{image:'assets/imgs/kottayam.jpg',title:'Kottyam',subtitle:'gods own country',decs:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book', 
                slider:[
                        {image:'assets/imgs/thiruvananthapuram.jpg'},
                        {image:'assets/imgs/palakkad.jpg'},
                        {image:'assets/imgs/palakkad.jpg'}
                        ],
                 specialities:[
                      {title:'Illikkal Kallu',subtitle:'',image:'assets/imgs/kannur.jpg'},
                      {title:'Elaveezhapoonchira',subtitle:'',image:'assets/imgs/theyyam.jpg'},
                      {title:'Vagamon',subtitle:'',image:'assets/imgs/thiruvananthapuram.jpg'}
                 ]

                  },
  		{image:'assets/imgs/idukki.jpeg',title:'Idukki',subtitle:'gods own country',decs:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
               slider:[
                        {image:'assets/imgs/thiruvananthapuram.jpg'},
                        {image:'assets/imgs/wayanadu.jpg'},
                        {image:'assets/imgs/palakkad.jpg'}
                        ],
                 specialities:[
                      {title:'Meesapulimala',subtitle:'',image:'assets/imgs/kannur.jpg'},
                      {title:'Kolukkumalai Tea Estate',subtitle:'',image:'assets/imgs/theyyam.jpg'},
                      {title:'Kurisumala Ashram',subtitle:'',image:'assets/imgs/thiruvananthapuram.jpg'}
                 ]
                },
  		{image:'assets/imgs/pathanamthitta.jpg',title:'Pathanamthitta',subtitle:'gods own country',decs:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book', 
              slider:[
                        {image:'assets/imgs/thiruvananthapuram.jpg'},
                        {image:'assets/imgs/malappuram.jpg'},
                        {image:'assets/imgs/palakkad.jpg'}
                        ],
                 specialities:[
                      {title:'Konni Forest Reserve',subtitle:'',image:'assets/imgs/kannur.jpg'},
                      {title:'Perunthenaruvi Waterfall',subtitle:'',image:'assets/imgs/theyyam.jpg'},
                      {title:'Sabarimala',subtitle:'',image:'assets/imgs/thiruvananthapuram.jpg'}
                 ]
                },
  		{image:'assets/imgs/alappuzha.jpg',title:'Alappuzha',subtitle:'gods own country',decs:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',   
              slider:[
                        {image:'assets/imgs/palakkad.jpg'},
                        {image:'assets/imgs/malappuram.jpg'},
                        {image:'assets/imgs/palakkad.jpg'}
                        ],
                 specialities:[
                      {title:'Alappuzha Beach',subtitle:'',image:'assets/imgs/kannur.jpg'},
                      {title:'Alappuzha Lighthouse',subtitle:'',image:'assets/imgs/theyyam.jpg'},
                      {title:'Day tour in Alleppey houseboat',subtitle:'',image:'assets/imgs/thiruvananthapuram.jpg'}
                 ]
              },
  		{image:'assets/imgs/kollam.jpg',title:'Kollam',subtitle:'gods own country',decs:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',  
                 slider:[
                        {image:'assets/imgs/palakkad.jpg'},
                        {image:'assets/imgs/kozhikkode.jpg'},
                        {image:'assets/imgs/kannur.jpg'}
                        ],
                 specialities:[
                      {title:'Palaruvi Falls',subtitle:'',image:'assets/imgs/kannur.jpg'},
                      {title:'Kollam Beach',subtitle:'',image:'assets/imgs/theyyam.jpg'},
                      {title:'Jadayupara',subtitle:'',image:'assets/imgs/thiruvananthapuram.jpg'}
                 ]
                  },
  		{image:'assets/imgs/thiruvananthapuram.jpg',title:'Thiruvananthapuram',subtitle:'gods own country',decs:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book', 
                  slider:[
                        {image:'assets/imgs/palakkad.jpg'},
                        {image:'assets/imgs/kozhikkode.jpg'},
                        {image:'assets/imgs/thiruvananthapuram.jpg'}
                        ],
                   specialities:[
                      {title:'Kovalam Beach',subtitle:'',image:'assets/imgs/kannur.jpg'},
                      {title:'Agastya Mala',subtitle:'',image:'assets/imgs/thiruvananthapuram.jpg'},
                      {title:'Thiruvananthapuram Zoo',subtitle:'',image:'assets/imgs/thiruvananthapuram.jpg'}

                   ]
                      }

  		]
  }
  getDistrictPlaces(data){
    console.log('workssss');
    this.navCtrl.push('TourPlacesPage',{data:data});
  }

}
