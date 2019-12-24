import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from "../../shared/services/auth.service";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SecureInnerPagesGuard implements CanActivate {

  userData;
  constructor(
    public authService: AuthService,
    public router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      this.userData = JSON.parse(localStorage.getItem('user'));
    if(this.authService.isLoggedIn) {
      //  window.alert("You are not allowed to access this URL!");
       if(this.userData.email=='codehubown@gmail.com')
        {
            this.router.navigate(['admin'])
        }
       else{
        this.router.navigate(['dashboard'])
       }
    }

    
    return true;
  }

}