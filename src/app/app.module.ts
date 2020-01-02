import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyCaeMkMEJgkNPF192TAaXg0QRNpSXFkcok",
  authDomain: "tasklist-757b8.firebaseapp.com",
  databaseURL: "https://tasklist-757b8.firebaseio.com",
  projectId: "tasklist-757b8",
  storageBucket: "tasklist-757b8.appspot.com",
  messagingSenderId: "804525283353",
  appId: "1:804525283353:web:9bc4c678cdfbde37d2b288",
  measurementId: "G-7SXC61VV9V"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage, 
    RegisterPage, 
    ResetPasswordPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig), 
    AngularFireAuthModule, 
    AngularFirestoreModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage, 
    RegisterPage, 
    ResetPasswordPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
