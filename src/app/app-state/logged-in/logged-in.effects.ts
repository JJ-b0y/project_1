import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, tap } from "rxjs";
import * as LoggedInActions from './logged-in.actions';
import { AuthService } from "../../services/auth-service";

@Injectable()
export class LoggedInEffects {
    action$ = inject(Actions);
    authService = inject(AuthService);

    persistLogin = createEffect(() => {
        return this.action$.pipe(
            ofType(LoggedInActions.loginSuccess),
            tap(({ user, accessToken, rememberMe }) => {
                this.authService.storeInfo(
                    { user, accessToken },
                    rememberMe
                );
            })
        )
    },
    {
        dispatch: false
    }
    );

    clearSession = createEffect(() => {
        return this.action$.pipe(
            ofType(LoggedInActions.logout),
            tap(() => this.authService.clearData())
        );
    },
    {
        dispatch: false
    }
    );

    restoreSession = createEffect(() => {
        return this.action$.pipe(
            ofType(LoggedInActions.restoreAuthSession),
            map(() => {
                const session = this.authService.loadInfo();

                return LoggedInActions.authSessionRestored({ session });
            })
        );
    });
}