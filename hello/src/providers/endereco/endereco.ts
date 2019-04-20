import { Injectable } from '@angular/core';
import { HttpProvider } from '../http/http';

@Injectable()
export class EnderecoProvider {

  constructor(private httpProvider : HttpProvider) {}

  public GetBairro(idCidades : string){
    this.httpProvider.url = 'http://localhost:33333/bairros/' + idCidades;
    return this.httpProvider.get();
  }
}
