import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { EntregaPage } from '../entrega/entrega';
// import { Injectable } from '@angular/core';

@IonicPage()
@Component({
  selector: 'page-pizza',
  templateUrl: 'pizza.html',
})

export class PizzaPage {
  public ExibirDados : boolean = true;
  public ListaTamanhos = [];
  public ListaSaboresPrecos = [];
  idProduto : string;

  constructor(
    public navCtrl: NavController, public navParams: NavParams,
    private httpProvider : HttpProvider)  {
      this.adicionarPizza(); }
      
      url = 'http://localhost:3000/'; // "http://104.196.102.231/";

  public adicionarPizza(){
    this.tamanho().subscribe(
      (resultado : any) => {
        // debugger;
        this.ListaTamanhos = resultado;
      }
    )
  }

  click(){
    this.sabores(this.idProduto).subscribe(
      (comida : any) => {
        this.ListaSaboresPrecos = comida;
      }
    )
  }

  buttonclick(){
    this.ExibirDados = !this.ExibirDados;
  }

  public tamanho (){
      this.httpProvider.url = this.url + 'tamanhos';
      return this.httpProvider.get();
  }

  public sabores(IdSabor : string){
    this.httpProvider.url = this.url + 'sabores/' + IdSabor;
    return this.httpProvider.get();
  }

  public dadosEntrega() {
    this.navCtrl.push(EntregaPage);
  }
}
