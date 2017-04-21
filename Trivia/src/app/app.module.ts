import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';

import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

 
import { login } from '../pages/login/login';
import { juego } from '../pages/juego/juego';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Flashlight } from '@ionic-native/flashlight';
import { Vibration } from '@ionic-native/vibration';
import { NativeAudio } from '@ionic-native/native-audio';
import {AngularFireModule} from 'angularfire2';
import {firebaseconfig} from '../pages/firebase/firebaseconfig';

/*
export const firebaseConfig = {
  apiKey: "AIzaSyBDMuBMxaY22NLtZlxvDQuDncFw0BhB3Ac",
  authDomain: "http://localhost:8100/",
  databaseURL: "https://trivia-94f86.firebaseio.com/",
  storageBucket: "your-domain-name.appspot.com",
  messagingSenderId: '<your-messaging-sender-id>'
};
*/
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    login,
    juego   
 
  ],
  imports: [
    IonicModule.forRoot(MyApp),
     AngularFireModule.initializeApp(firebaseconfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    login,
    juego,
 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Flashlight,
    Vibration,
    NativeAudio,
    AngularFireModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
