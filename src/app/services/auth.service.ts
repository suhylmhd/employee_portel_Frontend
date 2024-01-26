import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLogged(){
    return !!localStorage.getItem("name")  // !! - this returns a boolean value
  }
}
