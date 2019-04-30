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

  url = "http://localhost:33333/";

  public tamanhos (){
      this.httpProvider.url = this.url + 'tamanho';
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
     this.NovoSabor(this.sabor,this.preco,this.idProduto).subscribe(
       (resposta : any) =>{
        this.toast.presentToast(resposta.msg);
       },
       (error : any)=>{
        this.toast.presentToast("Este sabor já existe!");
       }
     )

  }
}

//export class ProdutoCadastro{

  public NovoSabor(sabor : string, preco : number, idProduto : string){

          let obj = {
              sabor:sabor,
              preco:preco,
              tamanhos_idTamanhos: idProduto
            }
            
            console.log(obj);
            this.httpProvider.url = this.url + 'cadastrosabor' ;
            return this.httpProvider.post(obj);
          }
        }
