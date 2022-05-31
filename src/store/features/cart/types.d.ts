import { CartItem } from '../../../types';

export type CartState = {
  items: CartItem[],
};

export type CartAddItemAction = {
  type: 'CART_ADD_ITEM',
  payload: {
    shopItemId: string,
    amount: number,
  }
};

export type CartUpdateItemAction = {
  type: 'CART_UPDATE_ITEM',
  payload: {
    cartItemId: string,
    amount: number,
  }
};

export type CartAction = CartAddItemAction | CartUpdateItemAction;
