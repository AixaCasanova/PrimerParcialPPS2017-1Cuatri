import { Component } from '@angular/core';
import {BaseRequestOptions, Http} from '@angular/http';
import { NavController  } from 'ionic-angular';
import { juego } from '../juego/juego';
//import {AngularFire, FirebaseListObservable} from 'angularfire2';
 

@Component({
  selector: 'login',
  templateUrl: 'login.html'
})

export class login 
{

    //items: FirebaseListObservable<any[]>;
    constructor(public navCtrl: NavController, public http: Http )//, af: AngularFire 
    {
         //this.items = af.database.list('/items');
    }
 
    Unusuario = {};
   
    loguear()
    { 
      //console.info(this.Unusuario['usuario']);
       this.navCtrl.setRoot(juego,this.Unusuario['usuario']);
    }


 
}
 