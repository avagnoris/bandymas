import { ThunkDispatch } from 'redux-thunk';
import { AuthAction, AuthState } from './features/auth/types';
import { NavigationAction, NavigationState } from './features/navigation/types';
import { CartAction, CartState } from './features/cart/types';
import { ShopState, ShopAction } from './features/shop/types';

export type RootState = {
  shop: ShopState,
  cart: CartState,
  auth: AuthState,
  navigation: NavigationState,
};

export type AppAction = AuthAction | CartAction | NavigationAction | ShopAction;

export type AppDispatch = ThunkDispatch<RootState, undefined, AppAction>;
