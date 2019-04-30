import { Injectable } from '@angular/core';
import { HttpProvider } from '../http/http'; /*
import { URL } from '../http-url/url'
const httpURL = new HttpURL(); */

@Injectable()
export class CadastroProvider {

  constructor(
    private  httpProvider : HttpProvider) {} /* ,
    public link : URL) {} */

    url = "http://localhost:33333/";

  public NovaConta(newUser:string, newPass:string){
    let obj = {
      newUser : newUser,
      newPass : newPass
    }

    // this.httpProvider.url = this.link + 'cadastro';
    this.httpProvider.url = this.url + 'cadastro';
    return this.httpProvider.post(obj);
  }

public NovoSabor(sabor : string, preco : number, idProduto : string){

  let obj = {
      sabor: sabor,
      preco: preco,
      tamanhos_idTamanhos: idProduto
  }
  console.log(obj);
  this.httpProvider.url = this.url + 'cadastrosabor';
  return this.httpProvider.post(obj);
}
}
