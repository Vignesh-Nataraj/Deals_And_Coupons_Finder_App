import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CouponsServiceService } from '../coupon-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  public ListOfCoupons: any = [];

  constructor(private couponservice: CouponsServiceService, private snackBar: MatSnackBar,
    private router:Router) { }

  ngOnInit(): void {
    this.couponservice.get().subscribe(response => {
      this.ListOfCoupons = response;
      console.log(this.ListOfCoupons);
    },
      error => {
        console.log(error)
      })
  }


  get() {
    this.couponservice.get().subscribe(response => {
      this.ListOfCoupons = response;
      //console.log(JSON.stringify(response));
      console.log(this.ListOfCoupons);
    },
      error => {
        console.log(error)
      })
  }

  public delete(ID: String, i: number) {
    let snackbarRef = this.snackBar.open("Are you sure want to Delete", "Confirm", { duration: 10000, panelClass: ["custom-style"] });
    snackbarRef.onAction().subscribe(
      () => {
        console.log("delete prompt")
        this.couponservice.deleteCoupon(ID).subscribe();
        this.ListOfCoupons.splice(i, 1);
        this.snackBar.open("Coupon is deleted", "OK", { duration: 2000, panelClass: ["custom-style"] });
      })


  }
  public edit(id:String){
    this.router.navigate(["edit-coupon",id]);
  }


}
