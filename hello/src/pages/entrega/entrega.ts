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
    this.addCidade();
  }
  public listaCidades = [];
  public listBairros = [];
  public TextField : boolean = false;
  public city : string;
  public neighborhood : string; 

  url = 'http://104.196.102.231/'

 public PegarBairro(){
   this.httpProvider.url = this.url + 'bairros' + '/cidades';
   return this.httpProvider.get();
  }

public PegarCidade(){
  this.httpProvider.url = this.url + 'cidades';
  return this.httpProvider.get();
}

 public addCidade(){
  this.PegarCidade().subscribe(
    (retorno : any) =>{
      this.listaCidades = retorno;
    }
  )
}

 public CityClick(){
   this.listBairos();
 }

 public listBairos(){
   this.PegarBairro().subscribe(
     (resultado : any) =>{
       this.listBairros = resultado;
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
      this.addCidade();
    }
  }
