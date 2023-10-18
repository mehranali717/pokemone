import { createSlice } from '@reduxjs/toolkit';
const favoriteSlice = createSlice({
  name: 'favourites',
  initialState: {list:[]},
  reducers: {
    addToFavorites: (state, action) => {
      const itemInList = state.list.find((poke)=>poke.name ===action.payload.name)
      if(itemInList){
        return
      }
      else{
        state.list.push({...action.payload });
      }
    },
    removeFromFavorites: (state, action) => {
      state.list = state.list.filter((pokemon) => pokemon.name !== action.payload.name);
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoriteSlice.actions;

export default favoriteSlice.reducer;
