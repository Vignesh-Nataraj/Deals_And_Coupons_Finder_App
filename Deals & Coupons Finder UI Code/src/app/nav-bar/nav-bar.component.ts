import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  title = 'Deals-Coupons';

  public Account: string | null | undefined;

  public loggedIn = false;
  public isAdmin = false;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.Account = "Account";

    if (this.auth.isUserLoggedIn()) {
      this.loggedIn = true;
      // console.log("user login called on app component.ts data is"+ this.loggedIn)\
      this.Account = this.auth.LoggedInUser();
    }

    if (this.auth.isAdmin()){
      this.isAdmin = true;
    } 
  }


  }


