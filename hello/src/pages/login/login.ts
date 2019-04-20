import { Component } from '@angular/core';
import { AlertController, NavController, NavParams } from 'ionic-angular';
import { Messages} from '../../providers/messages';
import { Toast } from '../../providers/toast';
import { HttpProvider } from '../../providers/http/http';
import { PizzaPage } from '../pizza/pizza';
import { CadastroPage } from '../cadastro/cadastro';

@Component({
  selector: 'page-home',
  templateUrl: 'login.html'
})
export class LoginPage {
  // exibirConteudo : boolean = true;
  listNomes = [];
  user : string;
  pass : string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private httpProvider : HttpProvider,
    private message : Messages,
    private toast : Toast) { }

    url = "http://localhost:33333/"; // 'http://104.196.102.231/logon';

    login(){
      this.UserPass(this.user, this.pass).subscribe(
        (_data : any) => {
          this.navCtrl.setRoot(PizzaPage);
        },
        (error : any) => {
          this.toast.presentToast("Usuário ou senha incorreta!");
          console.log(error);
        }
      )
    };

    public UserPass(userName: string, password: string){
      let obj =  {
        userName : userName,
        password : password,
      };
      this.httpProvider.url = this.url + 'login';
      return this.httpProvider.post(obj)
    }

    presentAlert() {
      let alert = this.alertCtrl.create({
        title: 'Sucesso!',
        subTitle: ` <b>${this.user}</b> Bem Vindo!`,
        buttons: ['OK']
      });
      alert.present();
    }

    showMessage(){
      this.message.loadingShow();
    }
    exibirToast(){
      this.toast.presentToast("Toast!");
    }

    PaginaNovaConta(){
      this.navCtrl.push(CadastroPage);
    }
  }