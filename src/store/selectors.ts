import { RootState } from './types';

// auth selectors
export const selectAuthLoading = (state: RootState) => state.auth.loading;
export const selectUser = (state: RootState) => state.auth.user;
export const selectAuthError = (state: RootState) => state.auth.error;
export const selectLoggedIn = (state: RootState) => Boolean(state.auth.user);

// navigation selectors
export const selectRedirect = (state: RootState) => state.navigation.redirect;

// shop selectors
export const selectShopItems = (state: RootState) => state.shop.items;
export const selectShopItemsLoading = (state: RootState) => state.shop.loading;

// cart selectors
export const selectCartItems = (state: RootState) => state.cart.items;
