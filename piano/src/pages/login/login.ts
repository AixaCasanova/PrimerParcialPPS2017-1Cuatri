import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';


@Component({
  templateUrl: 'login.html'
})
export class LoginPage { 
  constructor(private navCtrl: NavController)
  {
  }
  usr;

  goToPiano(){
    console.info(this.usr); 
    this.navCtrl.push(HomePage,this.usr);
  }
}