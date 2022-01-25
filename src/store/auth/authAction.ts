//interfaces
import {Dispatch} from '@reduxjs/toolkit';
import {UserAuthState} from './auth.interface';

//actions
import {setUserAuth} from './authSlice';

export const getUserFromLocalStorage = () => (dispatch: Dispatch) => {
  const user: UserAuthState = {
    userName: 'hola',
    email: 'asdasds',
    password: 'asdasdafsda',
  };

  dispatch(setUserAuth(user));
};

export const setUserAuthAction =
  (user: UserAuthState) => (dispatch: Dispatch) => {
    dispatch(setUserAuth(user));
  };
