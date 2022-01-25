//interfaces
import {Dispatch} from '@reduxjs/toolkit';
import {MessageChat} from './chat.interfaces';

//actions
import {setMessageInChat, clearChat} from './chatSlice';

export const setMessageInChatAction =
  (message: MessageChat) => (dispatch: Dispatch) => {
    dispatch(setMessageInChat(message));
  };

export const clearChatAction = () => (dispatch: Dispatch) => {
  dispatch(clearChat());
};
