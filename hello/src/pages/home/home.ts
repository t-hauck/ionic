import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Messages } from '../../providers/messages';
import { Toast } from '../../providers/toast';
import { PizzaPage } from '../pizza/pizza';
import { LoginPage } from '../login/login';
import { CadastroSaborPage } from '../cadastro-sabor/cadastro-sabor';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  public listaAlunos = [];
  public exibirConteudo : boolean = true;

  constructor(
    public navCtrl: NavController,
    private messages : Messages,
    private toast: Toast,
    private CadastroSaborPage : CadastroSaborPage){}

  LoginPage(){ // public LoginPage
    this.navCtrl.push(LoginPage);
  }

  public newSabor() {
    this.navCtrl.push(CadastroSaborPage);
  }

  public pizzaria() {
    this.navCtrl.push(PizzaPage);
  }

  public exibirToast(){
    this.toast.loadingShow();
  }

  public showMessage(){
    this.messages.loadingShow();
  }

  public limparAlunos(){
    this.listaAlunos = [];
  }

  public adicionarAlunos(){
    this.listaAlunos.push({nome : "Aluno A"});
    this.listaAlunos.push({nome : "Aluno B"});
    this.listaAlunos.push({nome : "Aluno C"});
    this.listaAlunos.push({nome : "Aluno D"});
    this.listaAlunos.push({nome : "Aluno E"});
  }

  buttonClick(){
    this.exibirConteudo = !this.exibirConteudo;
  }
}
