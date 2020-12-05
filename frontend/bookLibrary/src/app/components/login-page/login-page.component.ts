import {Component} from '@angular/core';
import {Log} from '../../log-enum';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  loginVal = Log;
  loading: boolean;

  constructor(private loginService: LoginService) {
  }

  login(user): void {
    this.loginService.login(user);
  }
}
