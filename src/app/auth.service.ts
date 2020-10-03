import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginPayload } from './auth/login-payload';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocalStorageService } from 'ngx-webstorage';
import { map } from 'rxjs/operators';
import { RegisterPayoad } from './auth/register-payload';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private baseUrl = "http://2fd67eb9fa0d.ngrok.io/api/";

  constructor(private httpClient: HttpClient, private localStorageService: LocalStorageService) { }

  login(loginPayload: LoginPayload): Observable<boolean> {
    let headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post(this.baseUrl + 'user/login', loginPayload, { headers: headers }).pipe(map(data => {
      this.localStorageService.store('loginData', data);
      return true;
    }));
  }

  //register api call
  register(registerPayload: RegisterPayoad): Observable<any> {
    let headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post(this.baseUrl + 'user/signup', registerPayload, { headers: headers });
  }
}
