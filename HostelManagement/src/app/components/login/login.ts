import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { LoginServices } from '../../Servies/login-services';
import { UserModel } from '../../models/user.model';
import { response } from 'express';
import { Router } from '@angular/router';
import { LoaderService } from '../../Servies/loader.service.ts';
import Swal from 'sweetalert2';

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
    private router: Router, private loaderService: LoaderService) {


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
         
          Swal.fire({
  icon: 'success',
  title: 'Signup Successful!',
  text: 'Your account has been created successfully.',
  confirmButtonText: 'OK'
});
        },
        error: (error) => {
           Swal.fire({
    icon: 'error',
    title: 'Signup Failed',
    text: 'Something went wrong. Please try again.',
    confirmButtonText: 'OK'
  });
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
      this.loaderService.show();
      this.loginService.LoginSubmit(this.logindata).subscribe({
        next: (response) => {
           Swal.fire({
  icon: 'success',
  title: 'Login Successful!',
  text: 'You have been logged in successfully.',
  confirmButtonText: 'OK'
});
          console.log('Login successful:', response);
          localStorage.setItem('token', 'true');
          this.router.navigate(['/dashboard'], {
            replaceUrl: true
          }).then(() => {
            this.loaderService.hide();
          });
        },
        error: (error) => {
           this.loaderService.hide();
          Swal.fire({
    icon: 'error',
    title: 'Login Failed',
    text: JSON.stringify(error.error, null, 2),
    confirmButtonText: 'OK'
  });

          console.log(JSON.stringify(error.error, null, 2));
        },
        complete: () => {
          console.log('Request completed');
        }
      });
    }
  }
}
