import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { DealsServiceService } from '../deals-service.service';

@Component({
  selector: 'app-dealtable',
  templateUrl: './dealtable.component.html',
  styleUrls: ['./dealtable.component.css']
})
export class DealtableComponent implements OnInit {

  ListOfDeals:any = []

  constructor(private dealservice:DealsServiceService, private snackBar :MatSnackBar) { }

  ngOnInit(): void {
    this.dealservice.get().subscribe(response=>{
      this.ListOfDeals = response;
    },
    error=>{
      console.log(error)
    })
  }

  delete(ID:String,i:number){

    let snackbarRef = this.snackBar.open("Are you sure want to Delete", "Confirm", { duration: 10000, panelClass: ["custom-style"] });
    snackbarRef.onAction().subscribe(
      () => {
        console.log("delete prompt")
        this.dealservice.deleteDeal(ID).subscribe();
        this.ListOfDeals.splice(i, 1);
        this.snackBar.open("Deal is deleted", "OK", { duration: 2000, panelClass: ["custom-style"] });
      })
  }
  

}
