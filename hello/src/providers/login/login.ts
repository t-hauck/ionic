import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginProvider {
url = "http://104.196.102.231/logon"
  constructor(public http: HttpClient) {
    //console.log('Hello LoginProvider Provider');
  }
  public login (username : string, password : string) {
    let obj = {
      userName : username,
      password : password
    }
    this.http.url = this.url;
    return this.http.post(obj);

  }
}
