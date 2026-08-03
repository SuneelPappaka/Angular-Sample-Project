import { HttpClient } from '@angular/common/http';
import { Injectable, Service } from '@angular/core';
import { UserModel } from '../models/user.model';

// @Service()
@Injectable({
  providedIn: 'root'
})
export class LoginServices {
    private apiUrl = 'https://localhost:7188/api/Login/';

    constructor(private http: HttpClient) {}

    SignUpSubmit(Signup: UserModel) {
         return this.http.post(
      `${this.apiUrl}SignUp`,
      Signup
    );
    }
    LoginSubmit(Login: any) {
        return this.http.post<any>(
      `${this.apiUrl}LoginCheck`,
      Login
    );
    }
}
 