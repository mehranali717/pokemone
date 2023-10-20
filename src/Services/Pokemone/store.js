import { configureStore } from '@reduxjs/toolkit';
import { PokemonApi } from './Pokemone';
import PokemoneSlice from './PokemoneSlice';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    [PokemonApi.reducerPath]: PokemonApi.reducer,
    handleAddRemove: PokemoneSlice,
    handleCompare : PokemoneSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(PokemonApi.middleware),
});
setupListeners(store.dispatch);
export default store;