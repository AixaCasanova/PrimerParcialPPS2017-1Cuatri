import { Component } from '@angular/core';
import { Flashlight } from '@ionic-native/flashlight';
import { Vibration } from '@ionic-native/vibration';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController, private flashlight: Flashlight,private vibration: Vibration) {

  }


  linterna()
  {
    console.log("hola");
     this.flashlight.switchOn();
  }

  linternaApagar()
  {
    console.log("hola");
     this.flashlight.switchOff()
  }


  Vibrar()
  {
    this.vibration.vibrate(10000);

    console.log("vibra");
  }
}
