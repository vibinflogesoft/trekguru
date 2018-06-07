import { Component, ViewChild } from '@angular/core';
import { Nav, Platform,AlertController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Push, PushObject, PushOptions} from '@ionic-native/push';
import { HomePage } from '../pages/home/home';
// import {LeafLetPage} from  '../pages/leaf-let/leaf-let';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any,lat:any,long:any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, 
                      public splashScreen: SplashScreen,public alertCtrl:AlertController, public push: Push) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
        { title: 'Kasaragod', component:'LeafLetPage' ,lat:'12.512106',long:'74.982818'},
        {title:'Kannur',component:'LeafLetPage',lat:'11.874477',long:'75.370369'},
        {title:'Wayanad',component:'LeafLetPage',lat:'11.741255',long:'76.034057'},
        {title:'Kozhikkod',component:'LeafLetPage',lat:'11.263468',long:'75.808266'},
        {title:'Malappuram',component:'LeafLetPage',lat:'11.068606',long:'76.072511'},
        {title:'Palakkad',component:'LeafLetPage',lat:'10.789491',long:'76.651893'},
        {title:'Thrissur',component:'LeafLetPage',lat:'10.520896',long:'76.233092'},
        {title:'Ernakulam',component:'LeafLetPage',lat:'9.974474',long:'76.306590'},
        {title:'Kottayam',component:'LeafLetPage',lat:'9.591747',long:'76.525227'},
        {title:'Idukki',component:'LeafLetPage',lat:'9.789534',long:'76.921650'},
        {title:'Pathanamthitta',component:'LeafLetPage',lat:'9.333865',long:'76.879380'},
        {title:'Alappuzha',component:'LeafLetPage',lat:'9.495612',long:'76.323907'},
        {title:'Kollam',component:'LeafLetPage',lat:'8.891982',long:'76.614844'},
        {title:'Thiruvananthapuram',component:'LeafLetPage',lat:'8.524764',long:'76.933198'},
               

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
       this.pushsetup();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component,{data:page});
  }

  pushsetup() {
    const options: PushOptions = {
     android: {
      // senderID: '785908241242'
     },
     ios: {
         alert: 'true',
         badge: true,
         sound: 'false'
     },
     windows: {}
  };

  const pushObject: PushObject = this.push.init(options);
  pushObject.on('notification').subscribe((notification: any) => {
    if (notification.additionalData.foreground) {
      let youralert = this.alertCtrl.create({
        title: 'New Push notification',
        message: notification.message
      });
      youralert.present();
    }
  });

  pushObject.on('registration').subscribe((registration: any) => {
     //do whatever you want with the registration ID
  });

  pushObject.on('error').subscribe(error => alert('Error with Push plugin' + error));
  }
}
