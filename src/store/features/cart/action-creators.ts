/* eslint-disable import/prefer-default-export */
import { Dispatch } from 'redux';
import { Item } from '../../../types';
import { AppAction, RootState } from '../../types';

export const createModifyCartItemAction = (shopItemId: string, newAmount: number) => (
  dispatch: Dispatch<AppAction>,
  getState: () => RootState,
): void => {
  const { shop, cart } = getState();

  const existingCartItem = cart.items.find((x) => x.shopItemId === shopItemId);
  const shopItem = shop.items.find((x) => x.id === shopItemId) as Item;

  const totalAmount = existingCartItem ? existingCartItem.amount + shopItem.amount : shopItem.amount;
  const amountLeft = totalAmount - newAmount;

  if (existingCartItem) {
    dispatch({
      type: 'CART_UPDATE_ITEM',
      payload: { cartItemId: existingCartItem.id, amount: newAmount },
    });
  } else {
    dispatch({
      type: 'CART_ADD_ITEM',
      payload: { shopItemId, amount: newAmount },
    });
  }

  dispatch({
    type: 'SHOP_CHANGE_ITEM_AMOUNT',
    payload: { id: shopItemId, amount: amountLeft },
  });
};
