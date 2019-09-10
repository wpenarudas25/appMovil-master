import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CitesProvider }from '../../providers/cites/cites';
import { Cite } from '../../models/cites';
import {CitePage} from '../cite/cite';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  
  cites:Cite[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public citesS: CitesProvider) {  
  }

 ionViewWillEnter(){
    this.getCites();
  }

  ionViewDidEnter(){
    this.getCites();
  }

  getCites(){
    this.cites = [];
    this.citesS.getCites().then((resolve) =>{
      let r: any = resolve;
      if(r.cites.length){
        this.cites = r.cites;
      }
    });    
  }
openNewCite(){
    this.navCtrl.push(CitePage);
  }

  deleteCite(cite){
    if(confirm('Esta seguro que desea eliminar la Cita?...')) {     
      this.citesS.deleteCite(cite).then(resolve =>{
        this.getCites();
      });  
    }    
  }

}

/*selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;*/

  /*itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      item: item
    });
  }*/

/* // If we navigated to this page, we will have an item available as a nav param
    //this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    /*this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }*/