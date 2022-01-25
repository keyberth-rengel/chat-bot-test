//interfaces
import {Dispatch} from '@reduxjs/toolkit';
import {UserAuthState} from './auth.interface';

//methods
import {saveStoreData} from '../../core/storage';

//actions
import {setLoading, setUserAuth} from './authSlice';

export const setUserAuthAction =
  (user: UserAuthState) => (dispatch: Dispatch) => {
    saveStoreData(user);
    dispatch(setUserAuth(user));
  };

export const setLoadingAction =
  (isLoading: boolean) => (dispatch: Dispatch) => {
    saveStoreData(isLoading);
    dispatch(setLoading(isLoading));
  };
