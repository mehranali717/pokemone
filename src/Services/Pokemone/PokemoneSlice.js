import { createSlice } from '@reduxjs/toolkit';
const favoriteSlice = createSlice({
  name: 'favourites',
  initialState: {isTrue:false, isOpen:false, products:[]},
  reducers: {
    handleAddRemove: (state, action) => {
      state.isTrue = action.payload;
    },
    handleCompare: (state, action) => {
      state.products.push(action.payload);
    }
  },
});

export const {handleAddRemove, handleCompare} = favoriteSlice.actions;

export default favoriteSlice.reducer;
