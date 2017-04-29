import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
 


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

UltimosRes: FirebaseListObservable<any[]>;

    cont:number=0;
    userN:string;
    bandera:boolean=true;

    constructor(public navCtrl: NavController, af: AngularFire) 
    {
        
        this.UltimosRes = af.database.list('/pr');

        console.info(this.UltimosRes);
       
       this.UltimosRes.forEach(element => {
            console.log(element);
           
       });
   
       
    }
 

}
