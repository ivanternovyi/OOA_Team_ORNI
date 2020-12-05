import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../user';

@Injectable( {
  providedIn: 'root'
} )
export class LoggedUserService {
  private userExist$: Subject<any> = new Subject();
  private cachedUser: User = null;

  constructor() {
  }

  public getUserStream() {
    return this.userExist$;
  }

  // tslint:disable-next-line:typedef
  public setUser( user ) {
    this.cachedUser = user;
    localStorage.setItem( 'user', JSON.stringify( user ) );
    this.userExist$.next( user );
  }

  public getUserObject(): User | null {
    return this.cachedUser;
  }
}
