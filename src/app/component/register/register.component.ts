import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  emailRegEx = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'

  registerForm =new FormGroup({
    name:new FormControl('',[Validators.required]),
    lname:new FormControl('',[Validators.required]),
    email:new FormControl('', [Validators.required, Validators.pattern(this.emailRegEx)]),
    password:new FormControl('',[Validators.required])
  })

  get email(){return this.registerForm.get('email')}
  get f() { return this.registerForm.controls; }


  saveRegister(){

   alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
   this.router.navigate(['/login']);
   console.log("registerForm",this.registerForm);
    console.log("reg",this.registerForm.value);
  
  }


}
