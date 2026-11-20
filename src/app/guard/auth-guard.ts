import { inject, Signal } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectIsLoggedIn } from '../app-state/logged-in/logged-in.selectors';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const store = inject(Store);

  const isLoggedIn: Signal<boolean> = store.selectSignal(selectIsLoggedIn);

  if (isLoggedIn()) {
    return true;
  } else {
    return router.createUrlTree(['/login'], { queryParams: { returnUrl: state.url } });
  }
};
