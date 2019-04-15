import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';

@IonicPage()
@Component({
  selector: 'page-entrega',
  templateUrl: 'entrega.html',
})
export class EntregaPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private httpProvider : HttpProvider) {
      this.PegarCidade();
    }
  public listaCidades : any;
  public listBairros : any;
  public TextField : boolean = false;

  url = 'http://localhost:3000/';

  clickCity(){
    this.PegarBairro();
  }
  public PegarCidade(){
    this.httpProvider.url = this.url + 'cidades';

    this.httpProvider.get().subscribe(
      (retorno : any) =>{
        this.listaCidades = retorno;
      },
      (error : any) => {
        console.log(error)
      }
    )
  }

 public PegarBairro(){
  this.httpProvider.url = this.url + 'bairros/:idcidades' + this.listaCidades;

  this.httpProvider.get().subscribe(
    (retorno : any) =>{
      this.listBairros = retorno;
    },
    (error : any) => {
      console.log(error)
    }
  )
}

public ClickText(){
  this.TextField = !this.TextField;
 }

 public reset(){
   this.TextField = !this.TextField;
 }
}
