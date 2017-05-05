import { Component } from '@angular/core';
import { NavController, ModalController  } from 'ionic-angular';
 import { resultados } from '../resultados/resultados';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
    
  }

presentModal(event) {
   
    //let modal = this.modalCtrl.create(resultados);
    //modal.present();
    this.navCtrl.push(resultados,event);
    
  }


}
