import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage }from '../home/home';
import { ListPage }from '../list/list';
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
	@ViewChild(Nav) nav: Nav;

	rootPage: any = HomePage;
    pages: Array<{title: string, component: any}>;

 // constructor(public navCtrl: NavController, public navParams: NavParams) {
  //}
   constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
    public navCtrl: NavController
    ) {
    this.initializeApp();
    //this.openPage(LoginPage);

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
    ];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

   initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
   this.navCtrl.push(page);
  }

}
