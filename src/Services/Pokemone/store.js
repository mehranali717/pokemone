import { configureStore } from '@reduxjs/toolkit';
import { PokemonApi } from './Pokemone';
import PokemoneSlice from './PokemoneSlice';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    [PokemonApi.reducerPath]: PokemonApi.reducer,
    addToFavorites: PokemoneSlice,
    removeFromFavorites:PokemoneSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(PokemonApi.middleware),
});
setupListeners(store.dispatch);
export default store;