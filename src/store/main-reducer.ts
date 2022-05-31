import { combineReducers } from 'redux';
import shopReducer from './features/shop/shop-reducer';
import cartReducer from './features/cart/cart-reducer';
import authReducer from './features/auth/auth-reducer';
import navigationReducer from './features/navigation/navigation-reducer';

const mainReducer = combineReducers({
  shop: shopReducer,
  cart: cartReducer,
  auth: authReducer,
  navigation: navigationReducer,
});

export default mainReducer;
