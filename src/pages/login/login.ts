import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider }from '../../providers/auth/auth';
import { HomePage } from '../home/home';
import { ProfilePage }from '../profile/profile';
import { TabsPage }from '../tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { environment }from '../../environments/environments'

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

	email: string;
	pass: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthProvider,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');

  }

  logIn(){
    // this.navCtrl.setRoot(TabsPage);
  	this.auth.signIn(this.pass, this.email).then(resolve =>{
      environment.isLog = this.auth.resp.ok;
  		if(this.auth.resp.ok) {
        environment.TOKEN = this.auth.resp.token;
        environment.user = this.auth.resp.user;
        this.navCtrl.setRoot(LoginPage);
        this.navCtrl.push(TabsPage);
  		}
  	})
  }
}
