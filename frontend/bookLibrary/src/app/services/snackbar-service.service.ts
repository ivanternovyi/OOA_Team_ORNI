import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackBar: MatSnackBar) {
  }
  // tslint:disable-next-line:typedef
  show(message: string, type, duration?: any) {
    this.snackBar.open(message, '', {
      duration: duration ? duration : 3000,
      panelClass: [type],
    });
  }
}
