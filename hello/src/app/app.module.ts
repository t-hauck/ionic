import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'; // Http, Headers, Response
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Messages } from '../providers/messages';
import { Toast } from '../providers/toast';

import { HttpProvider } from '../providers/http/http';
import { EnderecoProvider } from '../providers/endereco/endereco';
import { CadastroProvider } from '../providers/cadastro/cadastro';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { EntregaPage } from '../pages/entrega/entrega';
import { LoginPage } from '../pages/login/login';
import { PizzaPage } from '../pages/pizza/pizza';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    PizzaPage,
    EntregaPage,
    LoginPage,
    CadastroPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],

  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    PizzaPage,
    EntregaPage,
    LoginPage,
    CadastroPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Messages,
    Toast,
    HttpProvider,
    CadastroProvider,
    EnderecoProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}


