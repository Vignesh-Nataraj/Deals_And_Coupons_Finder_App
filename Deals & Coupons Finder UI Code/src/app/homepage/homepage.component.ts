import { Component, OnInit } from '@angular/core';
import { CouponsServiceService } from '../coupon-service.service';
import { DealsServiceService } from '../deals-service.service';
import { AuthService } from '../auth.service';
import { coupon } from '../coupon';
import { ProfileService } from '../profile.service';
import { UserDetails } from '../user-details';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {


  public ListOfCoupons: any = [];
  public ListOfDeals: any = [];
  id: String | undefined;
  provider: String | undefined;
  code: String | undefined;
  description: String | undefined;
  public click: any = [];
  public codeClick: any = [false, false];
  public ClickedCoupon = false;
  


  username: any;
  email: any
  cashbackPoints: any;
  preferences: any;
  listOfCoupons: Array<coupon> = [];



  constructor(
    private couponservice: CouponsServiceService,
    private dealservice: DealsServiceService,
    private auth: AuthService,
    private profileservice: ProfileService,
    

  ) { }


  loggedIn = false;
  isCouponUsed = false;

  usedlistOfCoupon: Array<coupon> = [];

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


    // ALL COUPONS
    this.couponservice.get().subscribe(response => {
      this.ListOfCoupons = response;
    },
      error => {
        console.log(error)
      })



    // ALL DEALS
    this.dealservice.get().subscribe(response => {
      this.ListOfDeals = response;
    },
      error => {
        console.log(error)
      })

  }

  // ASSIGNING IMAGES TO MAT CARDS
  public getImg(provider: String) {
    return "assets/images/provider/" + provider + ".png";
  }

  public dealRedirect(link: any) {
    window.open(link);
  }
  // MAT-CARD CLICKING FUNCTION
  toggle(i: number) {
    if (this.loggedIn) {
      if (this.click[i]) {

        this.click[i] = true;
      }
      else
        this.click[i] = true;


    }
  }

  // FOR SHOWING ADD COUPON BUTTON

  codeToggle(i: number, coupon: coupon) {
    // let UsedCoupon = new coupon()
    console.log("result" + this.loggedIn)
    this.codeClick[i] = true;
    if (!this.auth.isAdmin() && (this.listOfCoupons != null)) {
      var result = this.listOfCoupons.find(({ id }) => id == coupon.id);
    }
    if (result) {
      this.ClickedCoupon = true;

    }
    else {
      this.ClickedCoupon = false;
    }
    console.log("Result" + this.ClickedCoupon)
    // console.log("Result" + result);
    console.log(coupon);
    this.listOfCoupons = this.listOfCoupons || [];
    this.listOfCoupons.push(coupon);
    console.log(this.listOfCoupons);
    this.cashbackPoints = this.cashbackPoints + 5;
    let UpdatedUser = new UserDetails(this.username, this.email, this.cashbackPoints, this.preferences, this.listOfCoupons);
    this.profileservice.postuserdetails(UpdatedUser);

  }

  // FOR COMPARING USED COUPON WITH LIST OF COUPONS      

  couponUsedChecker(inputid: any) {
    if (this.auth.isUserLoggedIn()) {
      if (!this.auth.isAdmin() && (this.listOfCoupons != null)) {
        var result = this.listOfCoupons.find(({ id }) => id == inputid);
        if (result) {
          return true;
        }
      }
    }
    return false;
  }




}
