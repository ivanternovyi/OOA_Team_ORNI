/* tslint:disable:typedef */
import {Component, OnInit} from '@angular/core';
import {Log} from '../../log-enum';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerVal = Log;
  loading: boolean;

  constructor(private loginService: LoginService) {
  }

  register(user): void {
    this.loginService.register(user);
  }
}
