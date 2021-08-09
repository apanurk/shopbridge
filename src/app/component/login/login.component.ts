import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {



  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  emailRegEx = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'

  loginForm =new FormGroup({
    email:new FormControl('', [Validators.required, Validators.pattern(this.emailRegEx)]),
    password:new FormControl('',[Validators.required])
  })
  get email(){return this.loginForm.get('email')}

  sendLogin(){
    var em=this.loginForm.value.email;
    var pass=this.loginForm.value.password;
    console.log(em,pass);
    if(em =="admin@gmail.com" && pass =="admin" || em =="user@gmail.com" && pass =="user" ){
      localStorage.setItem("username", em);
      localStorage.setItem("password", pass);
     this.router.navigate(['/products']);
    //var lastname = localStorage.getItem("username");
    //console.log("AA",lastname);

    }
  }

}
