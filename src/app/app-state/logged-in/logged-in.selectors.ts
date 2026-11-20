import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IAuthState } from "./logged-in.reducer";

export const selectAuthState = createFeatureSelector<IAuthState>('loggedIn');

export const selectIsLoggedIn = createSelector( selectAuthState, (state) => state.isLoggedIn);

export const selectAuthInitialized = createSelector( selectAuthState, (state) => state.isInitialized);