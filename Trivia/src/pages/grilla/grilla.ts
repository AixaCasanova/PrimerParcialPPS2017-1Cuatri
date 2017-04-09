import { Component } from '@angular/core';
import {BaseRequestOptions, Http} from '@angular/http';
import { NavController } from 'ionic-angular';
import 'rxjs/Rx';



@Component({
  selector: 'juego',
  templateUrl: 'juego.html'
})

export class juego 
{

    constructor(public navCtrl: NavController, public http: Http) 
    {
       console.info("llego aca!");
      /*  this.http.get("http://tplab42016.hol.es/ws/clientes")
        .map(res => res.json())
        .subscribe((quote) =>{
          console.info(quote);  
      }); */


    }
 
 
 
}
