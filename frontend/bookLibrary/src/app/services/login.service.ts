import { Injectable } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SnackbarService } from './snackbar-service.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private router: Router,
    private http: HttpClient,
    private snackbarService: SnackbarService) {
  }

  login(user): Promise<any> {
    return this.http.post<any>(environment.apiUrl + '/api/v1/login/',
      { name: user.username, password: user.password }, this.httpOptions)
      .toPromise().then(res => {
        this.setSession(res);
        this.router.navigate(['/home']);
      })
      .catch(() => this.snackbarService.show('user doesn\'t exists or password is incorrect', 'error', 4000));
  }

  register(user: User): Promise<any> {
    return this.http.post<any>(environment.apiUrl + '/api/v1/signup/',
      { name: user.username, password: user.password }, this.httpOptions)
      .toPromise().then(res => {
        this.setSession(res);
        this.router.navigate(['/home']);
      })
      .catch(res => {
        this.snackbarService.show(user.username + ' ' + res.error.error_message.name[0], 'error', 4000);
      });
  }

  private setSession(authResult): void {
    localStorage.setItem('id_token', authResult.token);
    localStorage.setItem('name', authResult.name);
  }
}
