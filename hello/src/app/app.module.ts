import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Messages } from '../providers/messages';
import { Toast } from '../providers/toast';

import { PaginaPage } from '../pages/pagina/pagina';
import { LoginPage } from '../pages/login/login';
import { LoginProvider } from '../providers/login/login';
import { HttpProvider } from '../providers/http/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    PaginaPage, LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    PaginaPage, LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Messages,
    Toast,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginProvider,
    HttpProvider
  ]
})
export class AppModule {}
