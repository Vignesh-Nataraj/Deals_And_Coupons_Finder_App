import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { of, Observable } from 'rxjs';
import { catchError, mapTo, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  _url = "http://localhost:9000/gateway"; //API gateway URL

  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';
  private loggedUser: any;
  private isloginsuccess = false;

  constructor(private http: HttpClient) { }


  login(user: { username: string, password: string }): Observable<boolean> {
    return this.http.post<any>(this._url + "/authenticate", user)
      .pipe(
        tap(tokens => this.doLoginUser(user.username, tokens.jwtToken)),
        mapTo(true),
        catchError(error => {
          alert("Username or password Incorrect");
          return of(false);
        }));
  }


  logout() {
    this.doLogoutUser();
  }

  isLoggedIn() {
    return !!this.getJwtToken();
  }


  getJwtToken() {
    return localStorage.getItem(this.JWT_TOKEN);
  }

  private doLoginUser(username: string, token:String) {
    console.log("user logged in is: " + username);
    this.loggedUser = username;
    this.isloginsuccess = true;
    this.storeTokens(token);
  }

  private doLogoutUser() {
    this.loggedUser = null;
    this.isloginsuccess = false;
    this.removeTokens();
  }

  private storeTokens(token: any) {
    localStorage.setItem(this.JWT_TOKEN, token);
  }

  private removeTokens() { localStorage.removeItem(this.JWT_TOKEN); }

  isUserLoggedIn() { return this.isloginsuccess; }

  LoggedInUser() { return this.loggedUser; }

  isAdmin() {
    if (this.loggedUser == "Admin") { return true; } else return false;
  }
}