import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { EntregaPage } from '../entrega/entrega';

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

      url = 'http://localhost:33333/';

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
      this.httpProvider.url = this.url + 'tamanho';
      return this.httpProvider.get();
  }

  public sabores(IdSabor : string){
    this.httpProvider.url = this.url + 'sabor/' + IdSabor;
    return this.httpProvider.get();
  }

  public dadosEntrega() {
    this.navCtrl.push(EntregaPage);
  }
}
