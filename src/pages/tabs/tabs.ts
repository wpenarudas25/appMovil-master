import { Component } from '@angular/core';
import { NavController, Platform, NavParams } from 'ionic-angular';
import { ListPage } from '../list/list';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { CitePage }from '../cite/cite';
import { environment }from '../../environments/environments';
import { MyApp }from '../../app/app.component';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  isLog = environment.isLog;
  tab1Root = HomePage;
  tab2Root = CitePage;
  tab3Root = ListPage;
  tab4Root = ContactPage;

  constructor(public navCtrl:NavController, public param:NavParams) {

  }

  ionViewDidLeave(){
    this.isLog = environment.isLog;
  }

  ionViewWillEnter(){
    this.isLog = environment.isLog;
    console.log(this.isLog);
    if(!this.isLog) {
    	this.navCtrl.setRoot(MyApp);
    }
  }

  log(){
      this.navCtrl.setRoot(MyApp);
  }
}
