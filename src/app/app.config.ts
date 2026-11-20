import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { PreloadAllModules, provideRouter, withPreloading } from '@angular/router';

import { routes } from './app.routes';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarConfig } from '@angular/material/snack-bar';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { authReducer } from './app-state/logged-in/logged-in.reducer';
import { LoggedInEffects } from './app-state/logged-in/logged-in.effects';

const snackBarDefaults: MatSnackBarConfig = {
  duration: 3000,
  horizontalPosition: 'end',
  verticalPosition: 'top',
  politeness: 'assertive',
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideStore({
      loggedIn: authReducer
    }),
    provideEffects(LoggedInEffects),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: false,
    }),
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: snackBarDefaults },
  ]
};
