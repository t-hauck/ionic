import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Messages} from '../../providers/messages';
import { Toast } from '../../providers/toast';
import { PaginaPage } from '../pagina/pagina';
@Component({ 
  selector: 'page-home',
  templateUrl: 'login.html'
})
export class LoginPage {
  public listNomes = [];
  public nome : string = '';
  public exibirConteudo : boolean = true;
  public login: string;
  public senha: string;

  constructor(public navCtrl: NavController, private alertCtrl: AlertController, private message : Messages, private toast : Toast) { }
 
  logForm(){
    debugger
    if(this.login === "hauck" && this.senha === "hauck"){
      this.navCtrl.push(PaginaPage);
    } else{
      this.toast.presentToast("Usuário ou senha incorreta, verifique suas credenciais de acesso.");
    }
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Sucesso!',
      subTitle: ` <b>${this.login}</b> Seja bem vindo!`,
      buttons: ['OK']
    });
    alert.present();
  }
showMessage(){
    this.message.loadingShow();
  }
  
  exibirToast(){
    this.toast.presentToast("Toast");
  }

}
