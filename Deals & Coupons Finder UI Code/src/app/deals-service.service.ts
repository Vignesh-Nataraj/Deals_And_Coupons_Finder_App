import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Deal } from './deal';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class DealsServiceService {

  _url = "http://localhost:9000/deals/deals";


  public username = "admin";
  public password = "root";



  constructor(private _http: HttpClient,private auth:AuthService) { }

  public add(d: Deal) {
    // const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ":" + this.password) });
    // this._http.post(this._url + "/add", d, { headers }).subscribe();
    let jwt_token = this.auth.getJwtToken();
    const headers = new HttpHeaders({Authorization:"Bearer "+jwt_token});
    this._http.post(this._url + "/add", d,{headers}).subscribe();


  }

  public get() {
    var our = this._http.get(this._url + "/all");
    console.log(our);
    return our;
  }

  public deleteDeal(ID: String) {
    // console.log(this._url + "/delete/" + ID);
    // var our = this._http.delete(this._url + "/delete/" + ID);
    // console.log(our);
    // return our;
    let jwt_token = this.auth.getJwtToken();
    const headers = new HttpHeaders({Authorization:"Bearer "+jwt_token});
    var our = this._http.delete(this._url + "/delete/" + ID,{headers});
    return our;
  }

}
