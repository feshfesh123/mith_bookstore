import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = environment.baseUrl;
  helper = new JwtHelperService();
  userInfo : any;
  constructor(private http: HttpClient) { }

  login(values: any){
    return this.http.post(this.baseUrl + 'account/login', values).pipe(
      map((user : User) => {
        if (user) {
          localStorage.setItem('token', user.token);
        } 
      })
    )
  }

  register(values: any){
    return this.http.post(this.baseUrl + 'account/register', values);
  }

  decodeToken(){
    var token = localStorage.getItem('token');
    this.userInfo = this.helper.decodeToken(token);
  }

  logout(){
    localStorage.removeItem('token');
  }

  isLoggedIn(){
    var token = localStorage.getItem('token');
    return !this.helper.isTokenExpired(token);
  }
}
