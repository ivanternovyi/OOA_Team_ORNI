import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) {
  }

  // tslint:disable-next-line:typedef
  canActivate() {
    if (localStorage.getItem('id_token')) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
