/* eslint-disable @typescript-eslint/default-param-last */
import { Reducer } from 'redux';
import { v4 as createId } from 'uuid';
import { CartAction, CartState } from './types';

const initialState: CartState = {
  items: [],
};

const cartReducer: Reducer<CartState, CartAction> = (state = initialState, action) => {
  switch (action.type) {
    case 'CART_ADD_ITEM': {
      return {
        ...state,
        items: [...state.items, {
          id: createId(),
          shopItemId: action.payload.shopItemId,
          amount: action.payload.amount,
        }],
      };
    }

    case 'CART_UPDATE_ITEM': {
      return {
        ...state,
        items: state.items.map((item) => (
          item.id === action.payload.cartItemId
            ? { ...item, amount: action.payload.amount }
            : item
        )),
      };
    }

    default: return state;
  }
};

export default cartReducer;
