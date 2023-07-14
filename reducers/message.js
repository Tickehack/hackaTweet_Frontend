import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

export const messages = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    addMessage: (state, action) => {
      state.value.push(action.payload);
    },
    deleteMessage: (state, action) => {
      const messageId = action.payload;
      state.value = state.value.filter(message => message.id !== messageId);
    },
  },
});

export const { addMessage, deleteMessage } = messages.actions;
export default messages.reducer;
