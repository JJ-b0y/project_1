import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class MatSnackbarService {
  constructor(
    private snackBar: MatSnackBar
  ) {}

  displaySuccess(message: string): void {
    this.snackBar.dismiss();
    this.snackBar.open(message, 'OK', {
      duration: 3500,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: ['snackbar-success'],
    });
  };

  displayError(message: string): void {
    this.snackBar.dismiss();
    this.snackBar.open(message, 'Dismiss', {
      duration: 4500,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: ['snackbar-error'],
    });
  };
}
