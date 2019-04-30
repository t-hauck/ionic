import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { Toast } from '../../providers/toast';
import { CadastroProvider } from '../../providers/cadastro/cadastro';

@IonicPage()
@Component({
  selector: 'page-cadastro-sabor',
  templateUrl: 'cadastro-sabor.html',
})
export class CadastroSaborPage {
  public listaTamanhos  = [];
  idProduto : string;
  preco : number = 0;
  sabor : string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private toast :Toast,
    private httpProvider : HttpProvider,
    private CadastroProvider : CadastroProvider) {
    this.tamanhosPizza();
  }

  url = "http://localhost:33333/tamanho/";

  public tamanhos (){
      this.httpProvider.url = this.url;
      return this.httpProvider.get();
  }

  public tamanhosPizza(){
    this.tamanhos().subscribe(
      (resultado : any) =>{
        this.listaTamanhos = resultado;
      }
    )
  }

saborCadastroForm(){
  if(this.sabor !== "" && this.preco !== 0 && this.idProduto !== ""){
     this.CadastroProvider.NovoSabor(this.sabor,this.preco,this.idProduto).subscribe(
       (resposta : any) =>{
        this.toast.presentToast(resposta.msg);
       },
       (error : any)=>{
        this.toast.presentToast("Este sabor já existe!");
       }
     )

  }
}

}
