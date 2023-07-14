import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: {},
};

export const likes = createSlice({
  name: 'likes',
  initialState,
  reducers: {
    likeMessage: (state, action) => {
      const messageId = action.payload;
      if (state.value[messageId]) {
        state.value[messageId]++;
      } else {
        state.value[messageId] = 1;
      }
    },
    unlikeMessage: (state, action) => {
      const messageId = action.payload;
      if (state.value[messageId]) {
        state.value[messageId]--;
        if (state.value[messageId] === 0) {
          delete state.value[messageId];
        }
      }
    },
  },
});

export const { likeMessage, unlikeMessage } = likes.actions;
export default likes.reducer;
