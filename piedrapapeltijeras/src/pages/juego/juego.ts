import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';;

@Component({
  selector: 'page-juego',
  templateUrl: 'juego.html'
})
export class juego {
 
 
  NombreUss:any;
  constructor(public navCtrl: NavController, private navParams : NavParams) {
  this.NombreUss=navParams.data;
  console.log(navParams);
  }

  
  veoTodo:boolean=true;
  veoTodo2:boolean=false
  randomOpcUsr=["piedra","papel","tijera"];
  num;
  OpcMaq="";  
  ContMaq=0;
  ContUsr=0;
  ContGral=0;
  veoVos1:boolean=true;
  veoVos2:boolean=false;
  veoini:boolean = false;
  imgElect="";
  img2="";
  img = "assets/img/SPregunta.png";

  YaJugue()
  {
    this.veoini=false;
    this.img = "assets/img/SPregunta.png";
    this.veoVos1=true;
    this.veoVos2=false;
  }
  Jugar(OpcUsr)
  {
    this.veoVos1=false;
    this.veoVos2=true;
    this.num = Math.floor(Math.random() * 3);  
    this.OpcMaq=this.randomOpcUsr[this.num];
    console.info("Antes:"+this.OpcMaq);
    if(this.ContGral<3)
    {
        if(OpcUsr=="piedra")
        {
          this.imgElect="assets/img/piedra.jpg";
          if (this.OpcMaq=="piedra")
          {
            this.ContGral--;
          }
          else if (this.OpcMaq=="papel")
          {
            this.ContMaq++;
          }
          else if (this.OpcMaq=="tijera")
          {
            this.ContUsr++;
          }
        }
        else if(OpcUsr=="papel")
        {
          this.imgElect="assets/img/papel.jpg";
          if (this.OpcMaq=="piedra")
          {
            this.ContUsr++;
          }
          else if (this.OpcMaq=="papel")
          {
            this.ContGral--;
          }
          else if (this.OpcMaq=="tijera")
          {
            this.ContMaq++;
          }
        }
        else if(OpcUsr=="tijera")
        {
          this.imgElect="assets/img/tijeras.jpg";
          if (this.OpcMaq=="piedra")
          {
            this.ContMaq++;
          }
          else if (this.OpcMaq=="papel")
          {
            this.ContUsr++;
          }
          else if (this.OpcMaq=="tijera")
          {
            this.ContGral--;
          }
        }
        this.ContGral++;  

         if (this.OpcMaq=="piedra")
          {
            this.img="assets/img/piedra.jpg";
          }
          else if (this.OpcMaq=="papel")
          {
            this.img="assets/img/papel.jpg";
          }
          else if (this.OpcMaq=="tijera")
          {
            this.img="assets/img/tijeras.jpg";
          }
    }
    if(this.ContGral>=3)
    {
      this.veoTodo=false;
      this.veoTodo2=true;
      console.info("Maquina: "+this.ContMaq);
      console.info("Usuario: "+this.ContUsr);
      if (this.ContUsr > this.ContMaq) 
      {

        this.img2="assets/img/ganador.jpg";
      }else
      { 

        this.img2="assets/img/perdedor.jpg";
      }
    }
     console.info(this.ContGral);

     


  this.veoini=true;
}

VEmpezar()
{
  this.veoTodo=true;
  this.veoTodo2=false;
  this.num;
  this.OpcMaq="";  
  this.ContMaq=0;
  this.ContUsr=0;
  this.ContGral=0;
  this.veoVos1=true;
  this.veoVos2=false;
  this.veoini = false;
  this.imgElect="";
  this.img2="";
  this.img = "assets/img/SPregunta.png";
  this.navCtrl.push(HomePage);
}

}
