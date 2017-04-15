import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { juego } from '../juego/juego';
 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
 
 
  loguear(nom)
  {
   
   //this.navCtrl.setRoot(juego,"hola");
   this.navCtrl.push(juego,nom);
   
  }

}
