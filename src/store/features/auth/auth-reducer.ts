/* eslint-disable @typescript-eslint/default-param-last */
import { Reducer } from 'redux';
import { AuthState, AuthAction } from './types';

import { getLocalStorageItem, setLocalStoreageItem } from '../../../helpers/local-storage-helpers';

const USER_KEY_IN_LOCAL_STORAGE = 'user';

const initialState: AuthState = {
  user: getLocalStorageItem(USER_KEY_IN_LOCAL_STORAGE),
  error: null,
  loading: false,
};

const authReducer: Reducer<AuthState, AuthAction> = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_SUCCESS': {
      setLocalStoreageItem(USER_KEY_IN_LOCAL_STORAGE, action.payload.user);
      return {
        ...state,
        user: action.payload.user,
        loading: false,
      };
    }

    case 'AUTH_FAILURE': {
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    }

    case 'AUTH_LOGOUT': {
      localStorage.removeItem(USER_KEY_IN_LOCAL_STORAGE);
      return {
        ...state,
        user: null,
      };
    }

    case 'AUTH_CLEAR_ERROR': {
      return {
        ...state,
        error: null,
      };
    }

    case 'AUTH_LOADING': {
      return {
        ...state,
        error: null,
        loading: true,
      };
    }

    default: return state;
  }
};

export default authReducer;
