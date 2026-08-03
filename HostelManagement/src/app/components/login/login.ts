import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { LoginServices } from '../../Servies/login-services';
import { UserModel } from '../../models/user.model';
import { response } from 'express';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
  standalone: true
})
export class Login {
  showSignup: boolean = false;
  Submitted: boolean = false;

  logindata = {
    email: '',
    password: ''
  }


  signupdata: UserModel = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    phonenumber: '',
    id: 0,
    role: '',
    StudentId: 0,
    WardenId: 0
  };
  /**
   *
   */
  constructor(private http: HttpClient, private loginService: LoginServices,
    private router: Router
  ) {


  }
  ClearSignupData() {
    this.signupdata = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      phonenumber: '',
      id: 0,
      role: '',
      StudentId: 0,
      WardenId: 0
    };
  }
  SignUpSubmit(form: NgForm) {


    if (form.valid) {
      if (this.signupdata.password !== this.signupdata.confirmPassword) {
        return;
      }
      this.loginService.SignUpSubmit(this.signupdata).subscribe({
        next: (response) => {
          this.showSignup = false;
          this.Submitted = false;
          this.ClearSignupData();
          console.log('Signup successful:', response);
        },
        error: (error) => {
          console.log(JSON.stringify(error.error, null, 2));
        },

        complete: () => {
          console.log('Request completed');
        }
      });

    }
  }
  LoginSubmit(form: NgForm) {
    if (form.valid) {
      this.loginService.LoginSubmit(this.logindata).subscribe({
        next: (response) => {
          console.log('Login successful:', response);
          this.router.navigate(['/dashboard']);
        },
        error: (error) => {
          console.log(JSON.stringify(error.error, null, 2));
        },
        complete: () => {
          console.log('Request completed');
        }
      });
    }
  }
}
