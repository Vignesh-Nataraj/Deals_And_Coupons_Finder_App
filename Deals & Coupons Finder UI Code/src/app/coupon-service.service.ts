import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { coupon } from './coupon';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CouponsServiceService {


  _url = "http://localhost:9000/coupons/coupons";
  messageSuccess: boolean | undefined;


  public username = "admin";
  public password = "root";

  constructor(private _http: HttpClient ,private auth:AuthService) { }

  public add(c: coupon) {
    // var cal = this._http.post(this._url + "/add", c, { observe: 'response', responseType: 'text' }).subscribe();
    let jwt_token = this.auth.getJwtToken();
    const headers = new HttpHeaders({Authorization:"Bearer "+jwt_token});
    this._http.post(this._url + "/add", c,{headers}).subscribe();


  }

  public get() {
    var our = this._http.get(this._url + "/all");
    console.log(our);
    return our;
  }

  public deleteCoupon(ID: String) { 
    let jwt_token = this.auth.getJwtToken();
    const headers = new HttpHeaders({Authorization:"Bearer "+jwt_token});
    var our = this._http.delete(this._url + "/delete/" + ID,{headers});
    return our;
  }
public editCoupon(ID: String){
let edit = this._http.get<coupon>(this._url + "/edit/" + ID);
    console.log(edit);
    return edit;
  }

}

