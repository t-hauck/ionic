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
  public nomeLogin: string;
  public nomeSenha: string;

  constructor(public navCtrl: NavController, private alertCtrl: AlertController, private message : Messages, private toast : Toast) { }
  
  /*
  public adicionarNomes() {
	  if (this.nomeLogin.trim()) {
		  this.listNomes.push({nome: this.nomeLogin});
		  
		  this.presentAlert();
		  this.nomeLogin = '';
		  }
		  }
  */
 
  logForm(){
    debugger
    if(this.nomeLogin === "hauck" && this.nomeSenha === "hauck"){
      this.navCtrl.push(PaginaPage);
    } else{
      this.toast.presentToast("Usuário ou senha incorreta, verifique suas credenciais de acesso.");
    }
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Sucesso!',
      subTitle: ` <b>${this.nomeLogin}</b> Seja bem vindo!`,
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
