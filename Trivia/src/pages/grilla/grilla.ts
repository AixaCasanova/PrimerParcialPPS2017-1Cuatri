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
 

    }
 
 
 
}
