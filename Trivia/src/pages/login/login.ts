import { Component } from '@angular/core';
import {BaseRequestOptions, Http} from '@angular/http';
import { NavController  } from 'ionic-angular';
import { juego } from '../juego/juego';
import { NativeAudio } from '@ionic-native/native-audio';

 

@Component({
  selector: 'login',
  templateUrl: 'login.html'
})

export class login 
{

    audion;
    constructor(public navCtrl: NavController, public http: Http, private nativeAudio: NativeAudio )//, af: AngularFire 
    {
        this.audion=nativeAudio;
      this.audion.preloadSimple('ok', 'assets/sound.mp3');
     this.audion.play('ok',() => console.log('ok is done playing'));
      
          
    }
 
    Unusuario = {};
   
    loguear()
    { 
      //console.info(this.Unusuario['usuario']);
       this.navCtrl.setRoot(juego,this.Unusuario['usuario']);
    }

    myFunction(){}

 
}
 