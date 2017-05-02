import { Component, OnInit, OnDestroy  } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';;
import { DeviceMotion, DeviceMotionAccelerationData } from '@ionic-native/device-motion';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {firebaseconfig} from '../firebase/';

@Component({
  selector: 'page-juego',
  templateUrl: 'juego.html'
})
export class juego {
 
 
  NombreUss:any;

    subscription:any;
    options:any;
    x:Number;
    y:number;
    z:number;
    pantallaAncho:number;
    pantallaAlto :number;
    arriba:number;
    izquierda:number;
    rutaDeFoto:any;
    anchoDeFoto:any;
    altoDeFoto:any;
    aceleracion:any;
    Lusuarios: FirebaseListObservable<any[]>;
    resultadoJugada:any;

  constructor(public navCtrl: NavController, private navParams : NavParams, private deviceMotion: DeviceMotion, af: AngularFire) {
    this.Lusuarios=af.database.list('/usuarios');
    this.NombreUss=navParams.data;
    this.Lusuarios.push(this.NombreUss); 
    console.log(navParams);
    this.options={ frequency: 1000 };
    this.pantallaAncho = window.screen.width;
    this.pantallaAlto = window.screen.height;
    this.rutaDeFoto="assets/img/piedra.jpg";
    this.anchoDeFoto=80;
  }

  ngOnInit()    {  
    this.arriba=0;
    this.izquierda=0;
    try {
          this.subscription = this.deviceMotion.watchAcceleration(this.options).subscribe((aceleracion: DeviceMotionAccelerationData) => {
            this.x= aceleracion.x;
            this.y= aceleracion.y;
            this.z= aceleracion.z; 
            if((aceleracion.x < -9 || aceleracion.x > 9 ) || (aceleracion.y > -3 && aceleracion.y < 3) ){this.anchoDeFoto=100;this.altoDeFoto=100;}else{this.anchoDeFoto=50; this.altoDeFoto=50;}
            
          });
    }catch(error)
    { console.log(error); }
       
   }
    ngOnDestroy() {
     this.subscription.unsubscribe(); 
    } 


  vermaq:boolean=false;
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
    this.vermaq=false;
    this.veoini=false;
    this.img = "assets/img/SPregunta.png";
    this.veoVos1=true;
    this.veoVos2=false;
  }
  Jugar(OpcUsr)
  {
    this.vermaq=true;
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
            this.resultadoJugada="Empate!";
          }
          else if (this.OpcMaq=="papel")
          {
            this.ContMaq++;
            this.resultadoJugada="Gana la maquina!"
          }
          else if (this.OpcMaq=="tijera")
          {
            this.ContUsr++;
            this.resultadoJugada="Gana usted!"
          }
        }
        else if(OpcUsr=="papel")
        {
          this.imgElect="assets/img/papel.jpg";
          if (this.OpcMaq=="piedra")
          {
            this.ContUsr++;
            this.resultadoJugada="Gana usted!"
          }
          else if (this.OpcMaq=="papel")
          {
            this.ContGral--;
            this.resultadoJugada="Empate!"
          }
          else if (this.OpcMaq=="tijera")
          {
            this.ContMaq++;
            this.resultadoJugada="Gana la maquina!"
          }
        }
        else if(OpcUsr=="tijera")
        {
          this.imgElect="assets/img/tijeras.jpg";
          if (this.OpcMaq=="piedra")
          {
            this.ContMaq++;
            this.resultadoJugada="Gana la maquina!"
          }
          else if (this.OpcMaq=="papel")
          {
            this.ContUsr++;
            this.resultadoJugada="Gana usted!"
          }
          else if (this.OpcMaq=="tijera")
          {
            this.ContGral--;
            this.resultadoJugada="Empate!"
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

   var currenttime:number=setTimeout(()=>{
            this.YaJugue();
          },1500);
          

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
