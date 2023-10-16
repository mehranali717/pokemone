import { configureStore } from '@reduxjs/toolkit';
import { PokemonApi } from './Pokemone';

export const store = configureStore({
  reducer: {
    [PokemonApi.reducerPath]: PokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(PokemonApi.middleware),
});
