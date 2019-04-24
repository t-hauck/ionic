import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Toast } from '../../providers/toast';
import { CadastroProvider } from '../../providers/cadastro/cadastro';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {
  newUser : string;
  newPass : string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private toast : Toast,
    private cadastro : CadastroProvider) {
  }

  CriarConta(){
    if(this.newUser !== "" && this.newPass !== "" ){

    this.cadastro.NovaConta(this.newUser,this.newPass).subscribe(
      (resposta : any)=>{
        this.toast.presentToast(resposta.msg);
      },
      (error : any )=>{
        console.log(error);
        this.toast.presentToast("Conta já existente!");
      }
    )
    }
  }

  LoginPage(){
    this.navCtrl.push(LoginPage);
  }

}
