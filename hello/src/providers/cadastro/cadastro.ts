import { Injectable } from '@angular/core';
import { HttpProvider } from '../http/http';

@Injectable()
export class CadastroProvider {

  constructor(private  httpProvider : HttpProvider) {}

  url = "http://localhost:33333/"; 
  
  public NovaConta(newUser:string, newPass:string){
    let obj = {
      newUser : newUser,
      newPass : newPass
    }
    
    this.httpProvider.url = this.url + 'cadastro';
    return this.httpProvider.post(obj);
  }
}
