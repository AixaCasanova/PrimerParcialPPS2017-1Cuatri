import { Component  } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {firebaseconfig} from '../firebase/';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-resultados',
  templateUrl: 'resultados.html'
})
export class resultados {
  
    
   LJuegos: FirebaseListObservable<any[]>;   
    titulo;

  constructor(public navCtrl: NavController, private navParams : NavParams, public viewCtrl: ViewController, af: AngularFire ) {
   
    
    console.info(navParams.data);
    if(navParams.data=='tds'){
        this.titulo="Ultimas 5 jugadas";
        this.LJuegos=af.database.list('/usuarios', {
            query: {
              orderByKey:true,
               limitToLast:5
            }
          });

         this.LJuegos.forEach(element => {
              console.log(element);

        });

    }else if(navParams.data=='g'){
          this.titulo="Ultimas 10 jugadas ganadas";
          this.LJuegos=af.database.list('/usuarios', {
            query: {
              orderByChild: 'jugada',
               equalTo:'ganada',
               limitToLast:10
            }
          });

         this.LJuegos.forEach(element => {
              console.log(element);

        });

    }else if(navParams.data=='e'){
        this.titulo="Ultimas 10 jugadas empatadas";
         this.LJuegos=af.database.list('/usuarios', {
            query: {
              orderByChild: 'jugada',
               equalTo:'empatada',
               limitToLast:10
            }
          });

         this.LJuegos.forEach(element => {
              console.log(element);

        });

    }else if(navParams.data=='p'){
          this.titulo="Ultimas 10 jugadas perdidas";
          this.LJuegos=af.database.list('/usuarios', {
            query: {
              orderByChild: 'jugada',
               equalTo:'perdida',
               limitToLast:10
            }
          });

         this.LJuegos.forEach(element => {
              console.log(element);

        });
    }

  }

  dismiss() {

    this.viewCtrl.dismiss();

  }
   

}
