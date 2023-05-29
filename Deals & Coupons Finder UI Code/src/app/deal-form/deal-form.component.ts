import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DealsServiceService } from '../deals-service.service';

@Component({
  selector: 'app-deal-form',
  templateUrl: './deal-form.component.html',
  styleUrls: ['./deal-form.component.css']
})
export class DealFormComponent implements OnInit {

  public categories = ["Mobiles","Laptop","Fashion","Food","Furniture","Daily Essentials",
  "Electronics","Home & Kitchen Appliances"]

  
  public adForm!: FormGroup;
  public submitted = false;
  public confirmed = false;

  constructor(private _fb:FormBuilder, private formservice:DealsServiceService) { }

  ngOnInit(): void {
    this.adForm = this._fb.group({
      provider:["",[Validators.required]],
      category:["",[Validators.required]],
      description:["",[Validators.required]],
      link:["",[Validators.required]]
    });

  }

  onsubmit(){
    this.submitted = true;
  }

  confirm(){
    this.confirmed = true;
    this.formservice.add(this.adForm.value);
  }

  cancel(){
    this.submitted = false;
  }


}
