import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { User } from '../../models/user';
import { environment }from '../../environments/environments';



/*
  Generated class for the UsersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsersProvider {

	urlApi:string="https://api-movil.herokuapp.com/api/user";
  urlLocal = "http://localHost:3000/api/user";
  url= this.urlApi;
  users: User;
  httpOptions = {
        headers: new HttpHeaders({'authorization': `Bearer ${environment.TOKEN}` ,'Content-Type':  'application/json','Accept':'application/json'})
      };

  constructor(public http: HttpClient) {
  }

  getUsers(){
      //let token =this.auth.getToken();  
  		//let headers = new Headers({'Authorization':`Bearer ${token.token}`,'Content-Type':'application/json'});
      
  	return	new Promise(resolve =>{
      this.http.get(`${this.url}/medic`, this.httpOptions)
           .subscribe(res=>{

             this.users = res as User;
             console.log(`provider ${this.users[0].name}`);
             resolve(this.users);
            })
    })
  }

 

  postUser(user: User){
    //let token =this.auth.getToken();
   // let headerT = new Headers({'Authorization':`Bearer ${token.token}`,'Content-Type':'application/json'});
   
    return this.http.post(this.url,user,)
         .map(res =>{

         }).subscribe(res=>{
             console.log(res);
         });
         
  }

  putUser(user: User){
      //let token =this.auth.getToken();
      /*const httpOptions = {
        headers: new HttpHeaders({'Authorization': `Bearer ${token.token}`,'Content-Type':  'application/json','Accept':'application/json'})};
	*/
      return this.http.put(`${this.url}/`,user).map(res =>{

      });
    }

  deleteUser(id: string){
   // let token =this.auth.getToken();
    //const httpOptions = {
      //headers: new HttpHeaders({'Authorization': `Bearer ${token.token}`,'Content-Type':  'application/json','Accept':'application/json'})};

    return this.http.delete(`${this.url}/${id}`)
         .map(res =>{
         	console.log("eliminado")
         }).subscribe(res=>{

         });
  }

}


