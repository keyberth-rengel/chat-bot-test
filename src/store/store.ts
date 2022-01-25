import {configureStore} from '@reduxjs/toolkit';
import authState from './auth/authSlice';
import chatState from './chat/chatSlice';

export const store = configureStore({
  reducer: {
    authState,
    chatState,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
