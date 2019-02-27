import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public listAlunos = [];
  public esconderAlunos = [];
  public limparAlunos = []; 
  public exibirConteudo : boolean = true;

  constructor(public navCtrl: NavController) {
  }

  public adicionarAlunos(){
    this.listAlunos.push({nome : "Aluno A"});
    this.listAlunos.push({nome : "Aluno B"});
    this.listAlunos.push({nome : "Aluno C"});
    this.listAlunos.push({nome : "Aluno D"});
    this.listAlunos.push({nome : "Aluno E"});
  }

  buttonClick(){
    this.exibirConteudo = !this.exibirConteudo;
  }

  buttonLimpar(){
    this.listAlunos = [];
  }
}