import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AuthState, UserAuthState} from './auth.interface';

const initialState: AuthState = {
  auth: {
    userName: '',
    email: '',
    password: '',
  },
  isLoading: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserAuth: (state, action: PayloadAction<UserAuthState>) => {
      state.auth = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setUserAuth, setLoading} = authSlice.actions;

export default authSlice.reducer;
