import { Component } from '@angular/core';
import {BaseRequestOptions, Http} from '@angular/http';
import { NavController } from 'ionic-angular';
import 'rxjs/Rx';
import { login } from '../login/login'
import { NativeAudio } from '@ionic-native/native-audio';


@Component({
  selector: 'juego',
  templateUrl: 'juego.html'
})

export class juego 
{
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
    
    constructor(public navCtrl: NavController, public http: Http, private nativeAudio: NativeAudio) 
    {
      this.verPreguntaYResp(this.contador);
      //this.nativeAudio.preloadSimple('uniqueId1', 'C:\Users\aixac\Desktop\oksound.mp3').then();
      //this.nativeAudio.play('uniqueId1').then();
    }
    
    verResp(pregu,re,nrobtn)
    {    
      
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
            this.ContOK++;
             if(nrobtn==1){this.btncolor1='green';}
             else if(nrobtn==2){this.btncolor2='green';}
             else if(nrobtn==3){this.btncolor3='green';}
             else if(nrobtn==4){this.btncolor4='green';}
          }
          else{ 
            this.ContNoOK++;
            if(nrobtn==1){this.btncolor1='red';}
            else if(nrobtn==2){this.btncolor2='red';}
            else if(nrobtn==3){this.btncolor3='red';}
            else if(nrobtn==4){this.btncolor4='red';}
                
          }

      
           this.contador++;
            console.info("termina con: "+this.contador);

             this.veo=true; 
        } 

         
         if(this.contador > 5){
           this.veo=false;        
           this.veoini=false;
           this.veoFin=true;
           this.resultOK="Correctas: " + this.ContOK;
           this.resultNoOK="Incorrectas: " + this.ContNoOK;
         }

      }

      verPreguntaYResp(ind)
      {
        this.pregunta = this.listaPreguntas[ind]['pr'];   
        this.r1=this.listaRespuestas[ind]['r1'];
        this.r2=this.listaRespuestas[ind]['r2'];
        this.r3=this.listaRespuestas[ind]['r3'];
        this.r4=this.listaRespuestas[ind]['r4'];
        
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
