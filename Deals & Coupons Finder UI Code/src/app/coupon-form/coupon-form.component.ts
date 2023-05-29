import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { CouponsServiceService } from '../coupon-service.service';
@Component({
  selector: 'app-coupon-form',
  templateUrl: './coupon-form.component.html',
  styleUrls: ['./coupon-form.component.css']
})

export class CouponFormComponent implements OnInit {
  public categories = ["Mobiles","Laptop","Fashion","Food","Furniture"]
  public adForm!: FormGroup;
  public submitted = false;
  public confirmed = false;
 

  constructor(private _fb:FormBuilder,private couponService : CouponsServiceService ) { }

  ngOnInit(): void  {
    
    //creating form group and assigning form control
    this.adForm = this._fb.group({
      provider:["",[Validators.required]],
      code:["",[Validators.required]],
      category:["",[Validators.required]],
      description:["",[Validators.required]]
    });
  }
 

  
  //making submit to enable confirmation page
  onsubmit(){
    this.submitted = true;
  }

  //pushing data to array in advertisement Service
  confirm(){
    this.confirmed = true;
    this.couponService.add(this.adForm.value);
  }

  //canceling on confirmation page
  cancel(){
    this.submitted = false;
  }
}
