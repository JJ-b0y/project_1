import { createAction, props } from '@ngrx/store';
import { IAuthSession } from '../models/user.model';

export const loginSuccess = createAction(
    '[Auth] Login Success',
    props<{user: string; accessToken: string; rememberMe: boolean;}>()
);

export const logout = createAction('[Auth] Logout');

export const restoreAuthSession = createAction('[Auth] Restore Session');

export const authSessionRestored = createAction(
    '[Auth] Session Restored',
    props<{session: IAuthSession | null}>()
);