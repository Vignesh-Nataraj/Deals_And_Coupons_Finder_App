import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CouponFormComponent } from './coupon-form/coupon-form.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CouponsServiceService } from './coupon-service.service';
import { HttpClientModule } from '@angular/common/http';
import { HomepageComponent } from './homepage/homepage.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { DealFormComponent } from './deal-form/deal-form.component';
import { DealtableComponent } from './dealtable/dealtable.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MatInputModule } from '@angular/material/input';
import { MatOption } from '@angular/material/core';
import { TableComponent } from './table/table.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { ScanpageComponent } from './scanpage/scanpage.component';
import { EditCouponComponent } from './edit-coupon/edit-coupon.component';
import { AboutUsComponent } from './about-us/about-us.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent,
    CouponFormComponent,
    TableComponent,
    HomepageComponent,
    DealFormComponent,
    DealtableComponent,
    NavBarComponent,
    LoginComponent,
    LogoutComponent,
    SignUpFormComponent,
    ScanpageComponent,
    EditCouponComponent,
    AboutUsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule, ReactiveFormsModule, NgbModule, HttpClientModule, MatGridListModule, MatCardModule, FormsModule, MatToolbarModule,MatSnackBarModule,BrowserAnimationsModule
  ],
  providers: [CouponsServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
