import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  loginObj: boolean = false;
  constructor(public router: Router) { }
  canActivate(): boolean {
    if(this.loginObj){
      return true;
    } 
    return false;
    
  }
}
