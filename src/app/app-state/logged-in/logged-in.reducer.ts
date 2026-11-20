import { createReducer, on } from "@ngrx/store";
import { authSessionRestored, loginSuccess, logout } from "./logged-in.actions";

export interface IAuthState {
    user: string | null;
    accessToken: string | null;
    isLoggedIn: boolean;
    isInitialized: boolean;
    storageType: 'local' | 'session' | null;
}

export const initialState: IAuthState = {
    user: null,
    accessToken: null,
    isLoggedIn: false,
    isInitialized: false,
    storageType: null
};

export const authReducer = createReducer(
    initialState,
    on(
        loginSuccess,
        (state, { user, accessToken, rememberMe }) => ({
            ...state,
            user,
            accessToken,
            isLoggedIn: true,
            isInitialized: true,
            storageType: rememberMe ? 'local' : 'session'
        })
    ),
    on(
        logout,
        () => ({
            ...initialState,
            isInitialized: true
        })
    ),
    on(
        authSessionRestored,
        (state, { session }) => ({
            ...state,
            user: session?.user ?? null,
            accessToken: session?.accessToken ?? null,
            isLoggedIn: !!session,
            isInitialized: true,
            storageType: session ? state.storageType : null
        })
    )
)