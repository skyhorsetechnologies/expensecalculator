import { NgModule } from '@angular/core';

import { IonicApp, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import { ConferenceApp } from './app.component';

import { LoginPage } from '../pages/login/login';

import { HomePage } from '../pages/home/home';

import { ConferenceData } from '../providers/conference-data';
import { UserData } from '../providers/user-data';

import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SplashScreen } from '@ionic-native/splash-screen';


@NgModule({
  declarations: [
    ConferenceApp,
    LoginPage,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(ConferenceApp),
		IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ConferenceApp,
    LoginPage,
    HomePage
  ],
  providers: [
    ConferenceData,
    UserData,
    InAppBrowser,
    SplashScreen
  ]
})
export class AppModule { }
