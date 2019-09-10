import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { User } from '../../models/user';
import { environment } from '../../environments/environments';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

	urlApi:string="https://api-movil.herokuapp.com/api/login";
  urlLocal= "http://localhost:3000/api/login";
  url=this.urlApi;
	resp: any;

  constructor(public http: HttpClient) {
    
  }

  signIn(pass, email){
    //let token =this.auth.getToken();             
   // let headerT = new Headers({'Authorization':`Bearer ${token.token}`,'Content-Type':'application/json'});
   const httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json','Accept':'application/json'})};


    return new Promise( (resolve) => {this.http.post(this.url,{email: email, password: pass}, httpOptions)
                  .map(res =>{
                    this.resp = res;  
                    resolve (res);
                  })
                  .subscribe()
    })
         
  }

}
