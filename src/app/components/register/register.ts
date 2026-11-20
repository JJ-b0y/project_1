import { Component, effect, signal } from '@angular/core';
import { IRegister } from '../../interface/register-interface';
import { email, form, FormField, PathKind, required, SchemaPathTree } from '@angular/forms/signals';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';
import { MatSnackbarService } from '../../services/mat-snackbar-service';

@Component({
  selector: 'app-register',
  imports: [FormField, MatProgressSpinnerModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  constructor(
    private router:Router,
    private matSnackBarService: MatSnackbarService
  ) {
    effect(() => {
      if (this.registerForm.fullName().touched() && this.registerForm.fullName().invalid()) {
        for (let i = 0; i < this.registerForm.fullName().errors().length; i++) {
          const fullNameErr = this.registerForm.fullName().errors()[i];
          this.matSnackBarService.displayError(fullNameErr.message as string);
        }
      }
    });

    effect(() => {
      if (this.registerForm.email().touched() && this.registerForm.email().invalid()) {
        for (let i = 0; i < this.registerForm.email().errors().length; i++) {
          const emailErr = this.registerForm.email().errors()[i];
          this.matSnackBarService.displayError(emailErr.message as string);
        }
      }
    });

    effect(() => {
      if (this.registerForm.country().touched() && this.registerForm.country().invalid()) {
        for (let i = 0; i < this.registerForm.country().errors().length; i++) {
          const countryErr = this.registerForm.country().errors()[i];
          this.matSnackBarService.displayError(countryErr.message as string);
        }
      }
    });

    effect(() => {
      if (this.registerForm.institution().touched() && this.registerForm.institution().invalid()) {
        for (let i = 0; i < this.registerForm.institution().errors().length; i++) {
          const institutionErr = this.registerForm.institution().errors()[i];
          this.matSnackBarService.displayError(institutionErr.message as string);
        }
      }
    });

    effect(() => {
      if (this.registerForm.career().touched() && this.registerForm.career().invalid()) {
        for (let i = 0; i < this.registerForm.career().errors().length; i++) {
          const careerErr = this.registerForm.career().errors()[i];
          this.matSnackBarService.displayError(careerErr.message as string);
        }
      }
    });

    effect(() => {
      if (this.registerForm.interest().touched() && this.registerForm.interest().invalid()) {
        for (let i = 0; i < this.registerForm.interest().errors().length; i++) {
          const interestErr = this.registerForm.interest().errors()[i];
          this.matSnackBarService.displayError(interestErr.message as string);
        }
      }
    });
  }

  isLoading = signal(false);
  registerModel = signal<IRegister>({
    fullName: '',
    email: '',
    country: '',
    institution: '',
    career: '',
    interest: '',
  });

  registerForm = form(this.registerModel, this.formValidations);

  formValidations(schemaPath: SchemaPathTree<IRegister, PathKind.Root>) {
    required(schemaPath.fullName, { message: "Full Name is required" });
    required(schemaPath.email, { message: "Email is required" });
    email(schemaPath.email, { message: "Email is Invalid" });
    required(schemaPath.country, { message: "Country is required" });
    required(schemaPath.institution, { message: "Institution is required" });
    required(schemaPath.career, { message: "Select a career/research level" });
    required(schemaPath.interest, { message: "Interest is required" });
  }

  onRegister(e: Event) {
    e.preventDefault();
    this.isLoading.set(true);
    setTimeout(() => {
      localStorage.setItem("New Member", this.registerModel().email);
      this.router.navigate(['/login']);
      this.matSnackBarService.displaySuccess(`Registration Successful. Proceed to Login`);
    }, 2000);
  };
}
