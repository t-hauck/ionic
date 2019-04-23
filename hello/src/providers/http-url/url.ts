import { Injectable } from '@angular/core';

@Injectable()

export class URL {
  private url : string;

  constructor() {
    this.url = "http://localhost:33333/";
  }         // "http://104.196.102.231/";

  public link(url){
    this.url;
  }

}
