import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username="";
  password="";
  invalidLogin = false;

  constructor( 
    private auth:AuthService,
    private router:Router) {}
  
    ngOnInit(): void {
      
    }
      login() {
      this.auth.login(
        {
          username: this.username,
          password: this.password
        }
      )
        .subscribe(success => {
          if (success) {
            this.router.navigate(["homepage"]);
          }
        });
    }
  
  } 

