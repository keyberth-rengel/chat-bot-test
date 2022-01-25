import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ChatState, MessageChat} from './chat.interfaces';

const initialState: ChatState = {
  messages: [
    {
      id: 2345234,
      title: 'Tu mejor amigo',
      body: 'Estoy para ayudate y motivarte.',
      owner: false,
    },
  ],
};

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setMessageInChat: (state, action: PayloadAction<MessageChat>) => {
      state.messages.push(action.payload);
    },
    clearChat: state => {
      state.messages = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const {setMessageInChat, clearChat} = chatSlice.actions;

export default chatSlice.reducer;
