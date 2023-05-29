import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CouponFormComponent } from './coupon-form/coupon-form.component';
import { DealFormComponent } from './deal-form/deal-form.component';
import { DealtableComponent } from './dealtable/dealtable.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TableComponent } from './table/table.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './authguard.service';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { ScanpageComponent } from './scanpage/scanpage.component';
import { EditCouponComponent } from './edit-coupon/edit-coupon.component';
import { AboutUsComponent } from './about-us/about-us.component';






const routes: Routes = [
  {path:'coupon-form',component:CouponFormComponent,canActivate:[AuthGaurdService] },
  {path:'table',component:TableComponent,canActivate:[AuthGaurdService]},
  {path:'homepage',component:HomepageComponent},
  {path:'deal-form',component:DealFormComponent,canActivate:[AuthGaurdService]},
  {path:'dealtable',component:DealtableComponent,canActivate:[AuthGaurdService]},
  {path:'login',component:LoginComponent},
  {path:'logout',component:LogoutComponent},
  {path:'signup',component:SignUpFormComponent},
  {path:'scan',component:ScanpageComponent},
  {path:'edit-coupon/:id',component:EditCouponComponent},
  {path:'about-us',component:AboutUsComponent},
  {path:'',component:HomepageComponent,pathMatch:'full'}
  
  

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
