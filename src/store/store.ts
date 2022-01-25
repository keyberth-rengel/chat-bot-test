import {configureStore} from '@reduxjs/toolkit';
import authState from './auth/authSlice';

export const store = configureStore({
  reducer: {
    authState,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
