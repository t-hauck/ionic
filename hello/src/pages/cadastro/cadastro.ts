import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Toast } from '../../providers/toast';
import { CadastroProvider } from '../../providers/cadastro/cadastro';
import { LoginPage } from '../login/login';

/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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

  /* ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  } */
  
  CriarConta(){
    if(this.newUser !== "" && this.newPass !== "" ){

    this.cadastro.NovaConta(this.newUser,this.newPass).subscribe(
      (resposta : any)=>{
        this.toast.presentToast(resposta.msg);
      },
      (error : any )=>{
        console.log(error);
        this.toast.presentToast("Conta ja existente");
      }
    )
    }
  }

  LoginPage(){
    this.navCtrl.push(LoginPage);
  }

}
