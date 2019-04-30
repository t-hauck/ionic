import { Injectable } from '@angular/core';
import { HttpProvider } from '../http/http';

@Injectable()
export class EnderecoProvider {

  constructor(
    private httpProvider : HttpProvider) {}

    url = "http://localhost:33333/";

  public GetBairro(idCidades : string){
    this.httpProvider.url = this.url + idCidades;
    return this.httpProvider.get();
  }
}
