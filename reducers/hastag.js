import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

export const hashtags = createSlice({
  name: 'hashtags',
  initialState,
  reducers: {
    addHashtag: (state, action) => {
      const hashtag = action.payload;
      state.value.push(hashtag);
    },
    removeHashtag: (state, action) => {
      const hashtag = action.payload;
      state.value = state.value.filter(h => h !== hashtag);
    },
  },
});

export const { addHashtag, removeHashtag } = hashtags.actions;
export default hashtags.reducer;
