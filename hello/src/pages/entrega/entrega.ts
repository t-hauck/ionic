import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { EnderecoProvider } from './../../providers/endereco/endereco';

@IonicPage()
@Component({
  selector: 'page-entrega',
  templateUrl: 'entrega.html',
})
export class EntregaPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private httpProvider : HttpProvider,
    private EnderecoProvider : EnderecoProvider) {
      this.PegarCidade();
    }
  public city : string;
  public neighborhood : string;
  public listaCidades : any; // [];
  public listBairros : any;  // [];
  public TextField : boolean = false;

  url = 'http://localhost:33333/';


  clickCity(){
    this.PegarBairro();// listBairros();
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
 this.EnderecoProvider.GetBairro(this.city).subscribe(
   (retorno : any) => {
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
   this.city = null;
   this.listBairros = [];
   this.TextField = !this.TextField;
 }
}
