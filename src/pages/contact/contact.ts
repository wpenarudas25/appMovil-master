import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { environment }from '../../environments/environments';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

	user = environment.user;

  constructor(public navCtrl: NavController) {

  }

  add(){
  	
  }

}
