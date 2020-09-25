import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor(private snackbar: MatSnackBar) { }

  // tslint:disable-next-line: typedef
  openSnackBar(message: string) {
    this.snackbar.open(message, '', {
      duration: 2000,
    });
  }
}
