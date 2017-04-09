import { Component } from '@angular/core';
import {BaseRequestOptions, Http} from '@angular/http';
import { NavController } from 'ionic-angular';
import 'rxjs/Rx';



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
        constructor(public navCtrl: NavController, public http: Http) 
        {
           
       
            this.verPreguntaYResp(this.contador);
       
        }
    
    verResp(preg,re)
    {    
      console.info("empieza con: "+this.contador);
      if(this.contador <= 5)
      {
          for (let preg in this.listaPreguntas) 
          {
              preg = this.listaPreguntas[preg];
              if(re == preg['re'])
              {
              console.info("ok: "+ preg['re']);
              }
          } 
      
           this.contador++;
            console.info("termina con: "+this.contador);
            if(this.contador <= 5)
              {
                this.verPreguntaYResp(this.contador);  
              }  
        } 
        if(this.contador > 5){alert("se termino el juego");}

      }

      verPreguntaYResp(ind)
      {
        this.pregunta = this.listaPreguntas[ind]['pr'];   
        this.r1=this.listaRespuestas[ind]['r1'];
        this.r2=this.listaRespuestas[ind]['r2'];
        this.r3=this.listaRespuestas[ind]['r3'];
        this.r4=this.listaRespuestas[ind]['r4'];
      }
 
 

}
