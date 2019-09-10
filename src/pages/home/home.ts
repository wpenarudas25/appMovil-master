import { Component } from '@angular/core';
import { NavController, Platform, NavParams } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ListPage }from '../list/list';
import { CitePage }from '../cite/cite';
import { MyApp }from '../../app/app.component';
import { environment }from '../../environments/environments';
import { TabsPage }from '../tabs/tabs';
import {LoginPage}from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  name = environment.user.name;
  //tabBarElement:any = document.querySelector('#tabs ion-tabbar-section');
  constructor(public navCtrl: NavController, public navParam: NavParams) {
  }

  openCites(){
  	this.navCtrl.push(ListPage);
  }

  openNewCite(){
  	this.navCtrl.push(CitePage);
  }

  logOut(){
    environment.user = null;
    environment.TOKEN = null;
    console.log(`token: ${environment.TOKEN}  user: ${environment
      .user}`);
    environment.isLog = false;
    // this.navCtrl.goToRoot;
    
    // this.navCtrl.remove(1);
   // document.getElementById('nav_bar').style.display = 'none';
    //document.getElementById('login_page').style.display = 'block';
    console.log();
    
     this.navCtrl.setRoot(LoginPage);
    // this.navCtrl.setRoot(MyApp);
   // document.getElementById('tabp').style.display = 'none';

  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    
    
    this.navCtrl.push(page);
  }

  

}
