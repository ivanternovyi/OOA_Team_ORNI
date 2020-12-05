import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Log} from '../../log-enum';
import {Router} from '@angular/router';

@Component({
  selector: 'app-logination',
  templateUrl: './logination.component.html',
  styleUrls: ['./logination.component.scss', '../../app.component.scss']
})
export class LoginationComponent implements OnInit {
  @Input() showMode: Log;
  @Input() title: string;
  @Input() formVal: any;

  @Output() data: EventEmitter<object> = new EventEmitter();

  public form: FormGroup;
  public log = Log;


  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.form = this.createForm(this.formVal);
  }

  private createForm(userData): FormGroup {
    if (!userData) {
      userData = {};
    }
    const form = new FormGroup({
      username: new FormControl(userData.username, [
        Validators.required,
        Validators.minLength(3)]),
      password: new FormControl(userData.password, [
        Validators.required,
        Validators.minLength(6)]),
    });

    return form;
  }

  onSubmit(formValue): void {
    if (this.form.invalid) {
      return;
    }
    this.data.emit(formValue);
  }

  back(): void {
    if (this.showMode === Log.Register) {
      this.router.navigate(['/login']);
    } else if (this.showMode === Log.Edit) {
      this.data.emit(null);
    }
  }

}
