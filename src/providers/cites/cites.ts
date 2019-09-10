import { HttpClient, HttpHeaders, HttpErrorResponse  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cite } from '../../models/cites';
import 'rxjs/add/operator/map';
import { environment }from '../../environments/environments'

/*
  Generated class for the CitesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CitesProvider {

	urlApi:string="https://api-movil.herokuapp.com/api/cite";
  urlLocal="http://localhost:3000/api/cite";
  url = this.urlApi; 
  cites:Cite;
  httpOptions = {
        headers: new HttpHeaders({'authorization': `Bearer ${environment.TOKEN}` ,'Content-Type':  'application/json','Accept':'application/json'})
      };

 	constructor(public http: HttpClient) {
  	}

   	getCites(){

        return new Promise((resolve, reject) =>{
          try{
            this.http.get(`${this.url}/user/${environment.user._id}`,this.httpOptions)
            .map(res =>{
              const r:any = res;
              resolve({ cites: r.cites });
              this.cites = r.cites as Cite;
            })
            .subscribe(ress=>{
              
            })
          }catch{
            reject({ ok:false })
          }
        
      })
     
           
    	
  	}

 

  postCites(cite: Cite){
    //let token =this.auth.getToken();
   // let headerT = new Headers({'Authorization':`Bearer ${token.token}`,'Content-Type':'application/json'});
   
    return new Promise(resolve =>{
      this.http.post(this.url,cite,this.httpOptions)
         .map(res =>{
            let r:any = res;
             r.ok;
             resolve({ ok: r.ok })
         }).subscribe(res=>{
         });
    })
         
  }

  putCite(cite:Cite){
      //let token =this.auth.getToken();
      /*const httpOptions = {
        headers: new HttpHeaders({'Authorization': `Bearer ${token.token}`,'Content-Type':  'application/json','Accept':'application/json'})};
	*/
      return new Promise(resolve =>{
        this.http.put(`${this.url}/`,cite, this.httpOptions)
        .map(res =>{});
      })
    }

  deleteCite(cite:Cite){
   // let token =this.auth.getToken();
    //const httpOptions = {
      //headers: new HttpHeaders({'Authorization': `Bearer ${token.token}`,'Content-Type':  'application/json','Accept':'application/json'})};

    return new Promise(resolve =>{
      this.http.delete(`${this.url}/${cite._id}`,this.httpOptions)
         .map(res =>{
           resolve({ ok: true });
         }).subscribe(res=>{

         });
    })
  }


}
