import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';
import { Vibration } from '@ionic-native/vibration';
import { File } from '@ionic-native/file';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  usuarioNombre;
  archivo;
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

       //this.archivo.createDir('./', 'txt', true);
     this.archivo.checkDir(this.archivo.externalDataDirectory, '').then(_ => console.log('Directory exists')).catch(err => console.log('Directory doesnt exist'));
      this.archivo.createFile(this.archivo.externalDataDirectory,"archivo.txt",true).then(_ => console.log('file creado')).catch(err => console.log('error'));
      console.info(this.archivo.externalDataDirectory);
  });
    
  }

  playDO(){ 
    this.nativeAudio.play("do").then(this.onSuccess, this.onError);
    this.vibration.vibrate(100);
  }
    playRE(){
    this.nativeAudio.play("re").then(this.onSuccess, this.onError);
    this.vibration.vibrate(100);
  }
    playMI(){
    this.nativeAudio.play("mi").then(this.onSuccess, this.onError);
    this.vibration.vibrate(100);
  }
    playFA(){
    this.nativeAudio.play("fa").then(this.onSuccess, this.onError);
    this.vibration.vibrate(100);
  }l
    playSOL(){
    this.nativeAudio.play("sol").then(this.onSuccess, this.onError);
    this.vibration.vibrate(100);
  }
    playLA(){
    this.nativeAudio.play("la").then(this.onSuccess, this.onError);
    this.vibration.vibrate(100);
  }
    playSI(){
    this.nativeAudio.play("si").then(this.onSuccess, this.onError);
    this.vibration.vibrate(100);
  }


  onSuccess(){
    console.info("Ok al reproducir el sonido");
  }

    onError(){
    console.info("Error al reproducir el sonido");
  }

  
}
