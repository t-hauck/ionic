import { Injectable } from '@angular/core';
import { HttpProvider } from '../http/http';
import { HttpURL } from '../http-url/url'

const httpURL = new HttpURL();

@Injectable()
export class CadastroProvider {

  constructor(
    private  httpProvider : HttpProvider,
  private httpURL : HttpURL) {}

  public NovaConta(newUser:string, newPass:string){
    let obj = {
      newUser : newUser,
      newPass : newPass
    }

    this.httpProvider.url = this.httpURL.url + 'cadastro'; // this.url + 'cadastro';
    return this.httpProvider.post(obj);
  }
}
