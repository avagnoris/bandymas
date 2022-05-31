/* eslint-disable import/prefer-default-export */
import { Dispatch } from 'redux';
import axios from 'axios';
import { AppAction } from '../../types';
import {
  ShopFetchItemsLoadingAction,
  ShopFetchItemsSuccessAction,
  ShopFetchItemsFailureAction,
} from './types';
import { Item } from '../../../types';
import pause from '../../../helpers/pause';

const shopFetchItemsLoadingAction: ShopFetchItemsLoadingAction = {
  type: 'SHOP_FETCH_ITEMS_LOADING',
};

const createShopFecthItemsSuccessAction = (items: Item[]): ShopFetchItemsSuccessAction => ({
  type: 'SHOP_FETCH_ITEMS_SUCCESS',
  payload: { items },
});

export const shopFetchItemsAction = async (dispatch: Dispatch<AppAction>): Promise<void> => {
  dispatch(shopFetchItemsLoadingAction);

  const { data } = await axios.get<Item[]>('http://localhost:8000/shopItems');
  await pause(2000);
  const shopFecthItemsSuccessAction = createShopFecthItemsSuccessAction(data);
  dispatch(shopFecthItemsSuccessAction);
};
