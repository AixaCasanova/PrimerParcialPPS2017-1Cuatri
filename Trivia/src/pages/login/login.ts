import { Component } from '@angular/core';
import {BaseRequestOptions, Http} from '@angular/http';
import { NavController  } from 'ionic-angular';
import { juego } from '../juego/juego';

 

@Component({
  selector: 'login',
  templateUrl: 'login.html'
})

export class login 
{

   
    
    constructor(public navCtrl: NavController, public http: Http )//, af: AngularFire 
    {
         
        
    }
 
    Unusuario = {};
   
    loguear()
    { 
      //console.info(this.Unusuario['usuario']);
       this.navCtrl.setRoot(juego,this.Unusuario['usuario']);
    }

    myFunction(){}

 
}
 