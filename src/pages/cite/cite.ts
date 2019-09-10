import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular'; 
import { Cite }from '../../models/cites';
import {  CitesProvider }from '../../providers/cites/cites';
import { environment }from '../../environments/environments';
import { UsersProvider }from '../../providers/users/users';

/**
 * Generated class for the CitePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cite',
  templateUrl: 'cite.html',
})
export class CitePage {
	cite: Cite = {
		date: "",
    type : "",
    medic : {
      name : "",
      _id : ""
    },
    pacient : { 
      name : environment.user.name,
      _id : environment.user._id
    },
    check : null
	}

  medics;  
  medic;
  horarios;

  constructor(public navCtrl: NavController, public navParams: NavParams, public citeS: CitesProvider,
    public userS: UsersProvider) {
  }

  ionViewDidLoad() {
  }

  ionViewWillEnter(){
    this.userS.getUsers().then(resolve =>{
      this.medics = resolve;
      console.log(`page ${this.medics[0].name}`)
    });
  }

  addCite(){
    this.cite.medic._id =  this.cite.medic.name.split(' ')[1]
    console.log(this.cite.medic._id)
    	this.citeS.postCites(this.cite).then(resolve =>{
      this.cite.type = "";
      this.cite.medic.name = "";
      this.cite.medic._id = "";
      this.cite.date ="";
  	})
  }

  viewH(){
    if(this.cite.medic.name){
      this.medics.forEach((item, index) =>{
        if(item._id == this.cite.medic.name.split(" ")[1]){
          this.horarios = item.horarios;
        }
      })
      return true;
    }
    return false;
  }

}
