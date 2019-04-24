import { Injectable } from '@angular/core';
import { HttpProvider } from '../http/http';
import { URL } from '../http-url/url'

//const httpURL = new HttpURL();

@Injectable()
export class CadastroProvider {

  constructor(
    private  httpProvider : HttpProvider,
    private link : URL) {}

  public NovaConta(newUser:string, newPass:string){
    let obj = {
      newUser : newUser,
      newPass : newPass
    }

    this.httpProvider.url = this.link + 'usuario'; // 'cadastro';
    return this.httpProvider.post(obj);
  }
}
