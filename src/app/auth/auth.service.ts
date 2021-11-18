import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isUserLoggedIn = false;

  constructoÍr() { }

  get userLoggedIn() {
    return this._isUserLoggedIn;
  }

  login() {
    this._isUserLoggedIn = true;
  }

  logout() {
    this._isUserLoggedIn = false;
  } 
}
