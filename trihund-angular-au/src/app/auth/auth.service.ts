import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthResponse, UserData } from './auth-models';
import { UrlProviderService } from '../url-provider.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userName: string = null;
  password: string = null;
  constructor(private _http: HttpClient, private _urlProvider: UrlProviderService) {}

  private _httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  signin(loginData: FormGroup): Observable<AuthResponse> {
    return this._http.post<AuthResponse>
    (this._urlProvider.login, loginData.value, this._httpOptions);
  }

  signup(registerUserData: FormGroup): Observable<AuthResponse> {
    return this._http.post<AuthResponse>
    (this._urlProvider.register, registerUserData.value, this._httpOptions);
  }


}
