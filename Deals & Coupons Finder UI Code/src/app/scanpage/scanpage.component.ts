import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { coupon } from '../coupon';
import { ProfileService } from '../profile.service';
import { UserDetails } from '../user-details';

@Component({
  selector: 'app-scanpage',
  templateUrl: './scanpage.component.html',
  styleUrls: ['./scanpage.component.css']
})
export class ScanpageComponent implements OnInit {

  constructor(private auth: AuthService,
    private profileservice: ProfileService,) { }

  public Cashback_to_be_Redeemed = 0;
  public error = false;


  username: any;
  email: any
  cashbackPoints: any;
  preferences: any;
  listOfCoupons: Array<coupon> = [];

  loggedIn = false;
  isCouponUsed = false;
  clickButton = false;


  ngOnInit(): void {


    if (this.auth.isUserLoggedIn()) {
      this.profileservice.getuserdetails().subscribe(data => {
        this.username = data.username;
        this.email = data.email;
        this.cashbackPoints = data.cashbackPoints;
        this.preferences = data.preferences;
        this.listOfCoupons = data.listOfCoupons;

      })

      this.loggedIn = this.auth.isUserLoggedIn()
      console.log(this.loggedIn)
    }
  }

  onsubmit() {

    if (this.cashbackPoints > this.Cashback_to_be_Redeemed) {

      this.cashbackPoints = this.cashbackPoints - this.Cashback_to_be_Redeemed;

      let UpdatedUser = new UserDetails(this.username,
        this.email, this.cashbackPoints,
        this.preferences, this.listOfCoupons);
        this.clickButton=true;
        
      console.log(this.profileservice.postuserdetails(UpdatedUser)); 


    } else this.error = true;

  }

}
