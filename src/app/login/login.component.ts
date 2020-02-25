import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  atLoginPage: boolean = false;

  signupForm: FormGroup;
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  	this.signupForm = this.formBuilder.group({
  		firstName: [null, Validators.required],
  		lastName: [null, Validators.required],
  		email: [null, [Validators.email, Validators.required]],
  		password: [null, Validators.required]
  	});
  	this.loginForm = this.formBuilder.group({
  		loginEmail: [null, [Validators.email, Validators.required]],
  		loginPassword: [null, Validators.required]
  	})	
  }

  toLoginPage() {
  	this.atLoginPage = true;
  }

  toSignupPage() {
  	this.atLoginPage = false;
  }

}
