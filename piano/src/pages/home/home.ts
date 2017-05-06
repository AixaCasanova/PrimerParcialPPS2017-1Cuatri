import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';
import { Vibration } from '@ionic-native/vibration';
import { File } from '@ionic-native/file';
import { LoginPage } from '../login/login';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  usuarioNombre;
  archivo;
  todo=[];
  nota;
  aguardar;
  constructor(private file: File,public navCtrl: NavController, plt: Platform, private nativeAudio: NativeAudio, private vibration: Vibration,params:NavParams) {
     plt.ready().then((readySource) => {
       this.nativeAudio.preloadSimple("do", "assets/DO.mp3").then(this.onSuccess, this.onError);
       this.nativeAudio.preloadSimple("re", "assets/RE.mp3").then(this.onSuccess, this.onError);
       this.nativeAudio.preloadSimple("mi", "assets/MI.mp3").then(this.onSuccess, this.onError);
       this.nativeAudio.preloadSimple("fa", "assets/FA.mp3").then(this.onSuccess, this.onError);
       this.nativeAudio.preloadSimple("sol", "assets/SOL.mp3").then(this.onSuccess, this.onError);
       this.nativeAudio.preloadSimple("la", "assets/LA.mp3").then(this.onSuccess, this.onError);
       this.nativeAudio.preloadSimple("si", "assets/SI.mp3").then(this.onSuccess, this.onError);
       this.usuarioNombre=params.data;
       console.info(params.data);
       this.archivo=file;
       this.borrar();
        console.info(this.archivo.externalDataDirectory);
  });
    
  }

  playDO(){ 
    var unafecha = Date();
    this.aguardar= {"fecha":unafecha.toString(),"reproduccion":"DO.mp3", "comandoEjec":"this.nativeAudio.play('do').then(this.onSuccess, this.onError)"};
    this.nativeAudio.play("do").then(this.onSuccess, this.onError);
    this.vibration.vibrate(100);
    this.todo.push(this.aguardar);
    //this.archivo.writeFile(this.archivo.externalDataDirectory,"piano.txt", "this.aguardar", true).then(_ => console.log('ok')).catch(err => console.log('err'));
 }
    playRE(){
    var unafecha = Date();
    this.aguardar= {"fecha":unafecha.toString(),"reproduccion":"RE.mp3", "comandoEjec":"this.nativeAudio.play('re').then(this.onSuccess, this.onError)"};
    this.nativeAudio.play("re").then(this.onSuccess, this.onError);
    this.vibration.vibrate(100);
    this.todo.push(this.aguardar);
  }
    playMI(){
    var unafecha = Date();
    this.aguardar= {"fecha":unafecha.toString(),"reproduccion":"MI.mp3", "comandoEjec":"this.nativeAudio.play('mi').then(this.onSuccess, this.onError)"};
    this.nativeAudio.play("mi").then(this.onSuccess, this.onError);
    this.vibration.vibrate(100);
    this.todo.push(this.aguardar);
  }
    playFA(){
      
    var unafecha = Date();
    this.aguardar= {"fecha":unafecha.toString(),"reproduccion":"FA.mp3", "comandoEjec":"this.nativeAudio.play('fa').then(this.onSuccess, this.onError)"};
    this.nativeAudio.play("fa").then(this.onSuccess, this.onError);
    this.vibration.vibrate(100);
      this.todo.push(this.aguardar);
  }l
    playSOL(){
    
    var unafecha = Date();
    var aguardar= {"fecha":unafecha.toString(),"reproduccion":"SOL.mp3", "comandoEjec":"this.nativeAudio.play('sol').then(this.onSuccess, this.onError)"};
    this.nativeAudio.play("sol").then(this.onSuccess, this.onError);
    this.vibration.vibrate(100);
     this.todo.push(this.aguardar);
  }
    playLA(){
    
    var unafecha = Date();
    this.aguardar= {"fecha":unafecha.toString(),"reproduccion":"LA.mp3", "comandoEjec":"this.nativeAudio.play('la').then(this.onSuccess, this.onError)"};
    this.nativeAudio.play("la").then(this.onSuccess, this.onError);
    this.vibration.vibrate(100);
     this.todo.push(this.aguardar);
  }
    playSI(){
     
    var unafecha = Date();
    this.aguardar= {"fecha":unafecha.toString(),"reproduccion":"SI.mp3", "comandoEjec":"this.nativeAudio.play('si').then(this.onSuccess, this.onError)"};
    this.nativeAudio.play("si").then(this.onSuccess, this.onError);
    this.vibration.vibrate(100);
     this.todo.push(this.aguardar);
  }
 

    Salir()
    {
      this.archivo.writeFile(this.archivo.externalDataDirectory,"piano.txt", this.aguardar, true).then(_ => console.log('ok')).catch(err => console.log('errpiano'));
      this.archivo.writeFile(this.archivo.externalDataDirectory,"todo.txt", this.todo, true).then(_ => console.log('ok')).catch(err => console.log('errtodo'));
      console.info("aguardar: "+ this.aguardar);
      console.info("todo: "+ this.todo);
      alert("El archivo 'piano.txt' y 'todo.txt' se guardo en: "+ this.archivo.externalDataDirectory);
      this.navCtrl.push(LoginPage);
    } 
  onSuccess(){
    console.info("Ok al reproducir el sonido");
  }

    onError(){
    console.info("Error al reproducir el sonido");
  }


   borrar(){
           this.archivo.removeFile(this.archivo.externalDataDirectory,"piano.txt").then(_ => console.log('borrado ok')).catch(err => console.log('Archivo no encontrdo'));
           this.archivo.removeFile(this.archivo.externalDataDirectory,"todo.txt").then(_ => console.log('borrado ok')).catch(err => console.log('Archivo no encontrdo'));
      }

  
}
