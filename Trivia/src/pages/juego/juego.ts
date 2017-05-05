import { Component } from '@angular/core';
import {BaseRequestOptions, Http} from '@angular/http';
import { NavController, NavParams } from 'ionic-angular';
import 'rxjs/Rx';
import { login } from '../login/login'
import { NativeAudio } from '@ionic-native/native-audio';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {firebaseconfig} from '../firebase/';
import { Vibration } from '@ionic-native/vibration';
import { usr } from './';

@Component({
  selector: 'juego',
  templateUrl: 'juego.html'
})

export class juego 
{

  //variables
    unafecha;
    contador=1;
    pregunta ="pregu";
    r1="rta";
    r2="rta";
    r3="rta";
    r4="rta";
    Lapreg="";
    btncolor1='';
    btncolor2='';
    btncolor3='';
    btncolor4='';
    ContOK=0;
    ContNoOK=0;
    private banderaOk: boolean = false;
    private veo: boolean = false;
    private veoini: boolean = true;
    private veoFin: boolean = false;
    resultOK="";
    resultNoOK="";
    usr:any;
    usuarios: FirebaseListObservable<any[]>;
    lsrpr: FirebaseListObservable<any[]>;
    listaPreguntas={
        1:{
          pr:"en que paises se encuentra cordoba?",
          re:"Argentina y España"
        },  
        2:{
          pr:"cual es el nombre del villano de la pantera rosa?",
          re:"No tiene"
        }, 
        3:{
          pr:"cuales de los siguientes juegos no se juega con dados?",
          re:"Rayuela"
        }, 
        4:{
          pr:"en que año gano por ultima vez boca juniors su ultima libertadores?",
          re:"2007"
        }, 
        5:{
          pr:"cuanto es la cuarta parte de cien dividido cinco?",
          re:"Cinco"
        } 
    };

    listaRespuestas={
      1:{r1:"Argentina y España",r2:"Colombia y Venezuela",r3:"Paraguay y Portugal",r4:"Francia y Alemania"},  
      2:{r1:"Profesor Neurus",r2:"No tiene",r3:"Pepe",r4:"Leo"},  
      3:{r1:"Rayuela",r2:"Generala",r3:"Ludo",r4:"T.E.G"},  
      4:{r1:"2001",r2:"2003",r3:"2006",r4:"2007"},
      5:{r1:"Veinticinco",r2:"Diez",r3:"Cinco",r4:"Veinte"}       
    };
    listaUbdd:Array<any>;
    listaPregResp:Array<any>=[];
     nombre:any;
     vib:any;
     audioBTN;
     estado:boolean=false;
  //
  
  //var color

  btnColorOk="secondary";
  btnColorErr="danger";
     //

 
    constructor(public navCtrl: NavController,public vibration:Vibration ,public http: Http, private nativeAudio: NativeAudio, param:NavParams, af: AngularFire) 
    {
      this.audioBTN=nativeAudio;
      this.audioBTN.preloadSimple('ok', 'assets/resok2.mp3');
      this.audioBTN.preloadSimple('nook', 'assets/resNook1.mp3');
      this.unafecha = Date();
      console.info(this.unafecha.toString()); 
      this.verPreguntaYResp();
      this.usuarios = af.database.list('/usuarios');
      this.lsrpr=af.database.list("/pr");
      console.info();
      console.info("el nombre es:"+param.data);
       this.nombre=param.data;
       // this.usr={"nombre":this.nombre,"fecha":Date.now()};
    this.usr={"nombre":this.nombre,"fecha":this.unafecha.toString()};

      this.usuarios.push(this.usr); 
      this.vib=vibration;       
       
    }
    
   
    verResp(pregu,re,nrobtn)
    {  
      
      //console.info(this.listaPregResp);
     
    this.listaPregResp[this.contador]={"pr": pregu ,"re": re};
     //this.listaPregResp["prre"]+= pregu + re + "</br>";
      //  console.info( this.listaPregResp);
       // this.lsrpr.push({"pr":pregu,"re":re,"usuario":this.nombre});
      console.info("empieza con: "+this.contador);
  
      if(this.contador <= 5)
      {
          for (let preg in this.listaPreguntas) 
          {
              this.Lapreg = this.listaPreguntas[preg];
              if(pregu == this.Lapreg['pr'] && re == this.Lapreg['re'])
              { 
                    console.info("ok: "+ this.Lapreg['re']);
                    this.banderaOk=true;
                  
                    break;                
              }
              
          }

          if(this.banderaOk==true)
          {
            this.estado=true;
            console.info(this.contador);
            this.ContOK++;
             if(nrobtn==1){this.btncolor1=this.btnColorOk;}
             else if(nrobtn==2){this.btncolor2=this.btnColorOk;}
             else if(nrobtn==3){this.btncolor3=this.btnColorOk;}
             else if(nrobtn==4){this.btncolor4=this.btnColorOk;}
             this.vibration.vibrate(300); 
             console.info("se escucha?");
             this.audioBTN.play('ok',() => console.log('ok is done playing'));
            
          }
          else{ 
            this.estado=true;
            console.info(this.contador);
            this.ContNoOK++;
            if(nrobtn==1){this.btncolor1="danger";}
            else if(nrobtn==2){this.btncolor2=this.btnColorErr;}
            else if(nrobtn==3){this.btncolor3=this.btnColorErr;}
            else if(nrobtn==4){this.btncolor4=this.btnColorErr;}
            this.vibration.vibrate([100,100,100]);   
            this.audioBTN.play('nook',() => console.log('nook is done playing'));
            
          }

      
           this.contador++;
            console.info("termina con: "+this.contador);

             this.veo=true; 
        } 
 
         if(this.contador > 5){

            var currenttime:number=setTimeout(()=>{
                console.info(this.listaPregResp);
                console.info(this.usr);
                this.lsrpr.push({"pregyresp":this.listaPregResp,"usr":this.usr});
                console.info(this.listaPregResp);         
                this.veo=false;        
                this.veoini=false;
                this.veoFin=true;
                this.resultOK="Correctas: " + this.ContOK;
                this.resultNoOK="Incorrectas: " + this.ContNoOK;
           },1000);
           
         } else
         {
            
            var currenttime:number=setTimeout(()=>{
            this.verPreguntaYResp();
            },1000);
         }


    }


      verPreguntaYResp()
      {
        this.estado=false;
        this.pregunta = this.listaPreguntas[this.contador]['pr'];
        this.r1=this.listaRespuestas[this.contador]['r1'];
        this.r2=this.listaRespuestas[this.contador]['r2'];
        this.r3=this.listaRespuestas[this.contador]['r3'];
        this.r4=this.listaRespuestas[this.contador]['r4'];
        
        this.btncolor1='';
        this.btncolor2='';
        this.btncolor3='';
        this.btncolor4='';
        this.banderaOk = false;
        this.veo= false;

        if(this.contador > 5){

           this.veo=false;        
           this.veoini=false;
           this.veoFin=true;
           this.resultOK="Correctas: " + this.ContOK;
           this.resultNoOK="Incorrectas: " + this.ContNoOK;
         }
      }
 
 
 
 
 
 volverAEmpezar()
 {
    this.navCtrl.setRoot(login);
 }



}
