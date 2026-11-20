import { Component, effect, inject, signal } from '@angular/core';
import { ILogin } from '../../interface/login-interface';
import {
  email,
  form,
  FormField,
  maxLength,
  minLength,
  PathKind,
  required,
  SchemaPathTree
} from '@angular/forms/signals';
import { Router, RouterLink } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Store } from '@ngrx/store';
import { loginSuccess } from '../../app-state/logged-in/logged-in.actions';
import { MatSnackbarService } from '../../services/mat-snackbar-service';

@Component({
  selector: 'app-login',
  imports: [FormField, RouterLink, MatProgressSpinnerModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  constructor(
    private router: Router,
    private matSnackBarService: MatSnackbarService 
  ) {
    effect(() => {
      if (this.loginForm.email().touched() && this.loginForm.email().invalid()) {
        for (let i = 0; i < this.loginForm.email().errors().length; i++) {
          const emailErr = this.loginForm.email().errors()[i];
          this.matSnackBarService.displayError(emailErr.message as string);
        }
      }
    });

    effect(() => {
      if (this.loginForm.password().dirty() && this.loginForm.password().invalid()) {
        for (let i = 0; i < this.loginForm.password().errors().length; i++) {
          const passErr = this.loginForm.password().errors()[i];
          this.matSnackBarService.displayError(passErr.message as string);
        }
      }
    });
  }

  private readonly store = inject(Store);

  protected accessToken = 'accessToken' + "-" + String(Math.random()).slice(2);

  isLoading = signal(false);
  loginModel = signal<ILogin>({
    email: '',
    password: '',
    rememberMe: false,
  });

  loginForm = form(this.loginModel, this.formValidations);

  formValidations(schemaPath: SchemaPathTree<ILogin, PathKind.Root>) {
    required(schemaPath.email, { message: "Email is required" });
    required(schemaPath.password, { message: "Password is required" });
    email(schemaPath.email, { message: "Email is Invalid" });
    minLength(schemaPath.password, 4, { message: "Password must be at least 4 characters" });
    maxLength(schemaPath.password, 8, { message: "Password must be at most 8 characters" });
  }

  onSuccessfulLogin(): void {
    this.store.dispatch(
      loginSuccess({
        user: this.loginModel().email,
        accessToken: this.accessToken,
        rememberMe: this.loginModel().rememberMe
      })
    )
  }

  onLogIn(e: Event) {
    e.preventDefault();
    this.isLoading.set(true);

    setTimeout(() => {
      this.onSuccessfulLogin();

      this.router.navigate(['/']);
      this.matSnackBarService.displaySuccess('Login Successful');
    }, 3000)
  };

}
