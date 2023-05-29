import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { coupon } from '../coupon';
import { CouponsServiceService } from '../coupon-service.service';

@Component({
  selector: 'app-edit-coupon',
  templateUrl: './edit-coupon.component.html',
  styleUrls: ['./edit-coupon.component.css']
})
export class EditCouponComponent implements OnInit {
  public categories = ["Mobiles", "Laptop", "Fashion", "Food", "Furniture"]
  public adForm!: FormGroup;
  public submitted = false;
  public confirmed = false;
  // public coupon:coupon | undefined
  public id1: any;
  public code: any;
  public description: any;
  public provider: any
  public category: any


  public id:any;

  constructor(private _fb: FormBuilder, private couponService: CouponsServiceService, private activated:ActivatedRoute) { }

  ngOnInit(): void {

    this.id = this.activated.snapshot.paramMap.get("id")


    this.couponService.editCoupon(this.id).subscribe(
      Response =>
      // console.log(Response.id)
      {
        this.id1 = Response.id;
        this.code = Response.code;
        this.description = Response.description;
        this.provider = Response.provider;
        this.category = Response.category;
        

        //creating form group and assigning form control
        this.adForm = this._fb.group({
          id:[this.id1],
          provider: [this.provider, [Validators.required]],
          code: [this.code, [Validators.required]],
          category: [this.category, [Validators.required]],
          description: [this.description, [Validators.required]]
        })
      });

    // console.log(this.adForm.value);
  }



  //making submit to enable confirmation page
  onsubmit() {
    this.submitted = true;
  }

  //pushing data to array in advertisement Service
  confirm() {
    this.confirmed = true;
    console.log(this.couponService.add(this.adForm.value));
    this.couponService.add(this.adForm.value);
  }

  //canceling on confirmation page
  cancel() {
    this.submitted = false;
  }
}

