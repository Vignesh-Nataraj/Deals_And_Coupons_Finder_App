import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { UserDetails } from './user-details';
import { SignupDetails } from './signup-details';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  public var = "";
  loggedinUserDetails:any;

  username:any;
  email:any
  cashbackPoints:any;
  preferences:any;
  listOfCoupons:any;

  constructor(private http:HttpClient, private auth:AuthService) { }


  getuserdetails(){
   this.var = this.auth.LoggedInUser();
   return this.http.get<UserDetails>("http://localhost:9000/user/user/getuser/"+this.var);
  }

  postuserdetails(updatedDetails:UserDetails){
    let jwt_token = this.auth.getJwtToken();
    console.log(jwt_token);
    const headers = new HttpHeaders({Authorization:"Bearer "+jwt_token}); //Added Now
    return this.http.post("http://localhost:9000/user/user/update",updatedDetails,{headers}).subscribe();
  }

  signupudetails(signupDetails:SignupDetails){
    
    return this.http.post("http://localhost:9000/user/user/add",signupDetails).subscribe();
  }


}
