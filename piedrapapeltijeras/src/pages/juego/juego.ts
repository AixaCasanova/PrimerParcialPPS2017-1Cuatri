import { Component  } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {firebaseconfig} from '../firebase/';
import { NativeAudio } from '@ionic-native/native-audio';
import { Vibration } from '@ionic-native/vibration';


@Component({
  selector: 'page-juego',
  templateUrl: 'juego.html'
})
export class juego {
 
 
  NombreUss:any;

    
  //variables
    rutaDeFoto:any;
    anchoDeFoto:any=50;
    altoDeFoto:any=50;
    Lusuarios: FirebaseListObservable<any[]>;
    resultadoJugada:any;
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
    unafecha;
    res;
    audioBTN;
    vib;
  //fin variables

  constructor(public navCtrl: NavController, private navParams : NavParams, af: AngularFire, nativeAudio:NativeAudio,vibration:Vibration) {
    this.Lusuarios=af.database.list('/usuarios');
    this.NombreUss=navParams.data;
    //this.Lusuarios.push(this.NombreUss); 
    console.log(navParams);
    this.rutaDeFoto="assets/img/piedra.jpg";
    this.unafecha = Date();
    console.info(this.unafecha.toString());
    this.audioBTN=nativeAudio;
    this.audioBTN.preloadSimple('ok', 'assets/oksound.mp3');
    this.audioBTN.preloadSimple('nook', 'assets/errorsound.mp3');
    this.audioBTN.preloadSimple('empate', 'assets/highhat.mp3');
    
    this.vib=vibration;
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
            this.resultadoJugada="Empate!";
            this.audioBTN.play('empate');
          }
          else if (this.OpcMaq=="papel")
          {
            this.ContMaq++;
            this.resultadoJugada="Gana la maquina!";
            this.audioBTN.play('nook');
            this.vib.vibrate([200,200,200]);
            
          }
          else if (this.OpcMaq=="tijera")
          {
            this.ContUsr++;
            this.resultadoJugada="Gana usted!";
            this.audioBTN.play('ok');
            this.vib.vibrate(500);
          }
        }
        else if(OpcUsr=="papel")
        {
          this.imgElect="assets/img/papel.jpg";
          if (this.OpcMaq=="piedra")
          {
            this.ContUsr++;
            this.resultadoJugada="Gana usted!";
            this.audioBTN.play('ok');
            this.vib.vibrate(500);
          }
          else if (this.OpcMaq=="papel")
          {
            this.resultadoJugada="Empate!";
            this.audioBTN.play('empate');
          }
          else if (this.OpcMaq=="tijera")
          {
            this.ContMaq++;
            this.resultadoJugada="Gana la maquina!";
            this.audioBTN.play('nook');
            this.vib.vibrate([200,200,200]);
          }
        }
        else if(OpcUsr=="tijera")
        {
          this.imgElect="assets/img/tijeras.jpg";
          if (this.OpcMaq=="piedra")
          {
            this.ContMaq++;
            this.resultadoJugada="Gana la maquina!";
            this.audioBTN.play('nook');
            this.vib.vibrate([200,200,200]);
          }
          else if (this.OpcMaq=="papel")
          {
            this.ContUsr++;
            this.resultadoJugada="Gana usted!"
            this.audioBTN.play('ok');
            this.vib.vibrate(500);
          }
          else if (this.OpcMaq=="tijera")
          {
            this.resultadoJugada="Empate!";
            this.audioBTN.play('empate');
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
       var currenttime:number=setTimeout(()=>{
            this.veoTodo=false;
            this.veoTodo2=true;
            console.info("Maquina: "+this.ContMaq);
            console.info("Usuario: "+this.ContUsr);
            if (this.ContUsr > this.ContMaq) 
            {
              this.res="Ganaste!"
              this.img2="assets/img/ganador.jpg";        
              this.Lusuarios.push({nombre:this.NombreUss, jugada:"ganada", puntosMaq:this.ContMaq, puntosUsr:this.ContUsr, fecha:this.unafecha.toString()});
              
           }else if (this.ContUsr < this.ContMaq) 
            {  
              this.res="Perdiste!"
              this.img2="assets/img/perdedor.jpg";
    
                this.Lusuarios.push({nombre:this.NombreUss, jugada:"perdida", puntosMaq:this.ContMaq, puntosUsr:this.ContUsr, fecha:this.unafecha.toString()});
          
            }else if (this.ContUsr == this.ContMaq) 
            {
              this.res="Empataste!"
              this.img2="assets/img/empate.png";
              this.Lusuarios.push({nombre:this.NombreUss, jugada:"empatada", puntosMaq:this.ContMaq, puntosUsr:this.ContUsr, fecha:this.unafecha.toString()});
            
           }
      },2000);
    }
     console.info(this.ContGral);

     


  this.veoini=true;

   var currenttime:number=setTimeout(()=>{
            this.YaJugue();
          },2000);
          

}

  YaJugue()
  {
    this.vermaq=false;
    this.veoini=false;
    this.veoVos1=true;
    this.veoVos2=false;
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
