import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CouponsServiceService } from '../coupon-service.service';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {
    public categories = ["Mobiles", "Laptop", "Fashion", "Food", "Furniture"]
  public adForm!: FormGroup;
  public submitted = false;
  public confirmed = false;

  public confirm_password_checker = false;

  public confirm_password:any;


  constructor(private _fb: FormBuilder, private signupservice: ProfileService) { }

  ngOnInit(): void {

    //ADDING USER SIGN UP FORM
    this.adForm = this._fb.group({
      username: ["", [Validators.required,Validators.minLength(4)]],
      password: ["", [Validators.required,Validators.minLength(4)]],
      email: ["", [Validators.required]]
    });
  }



  //SIGNING UP SERVICE
  onsubmit() {
    this.submitted = true;
    console.log(this.adForm.value)
    this.signupservice.signupudetails(this.adForm.value);
  }

}