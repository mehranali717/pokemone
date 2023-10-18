// Pokemone.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const PokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getPokemon: builder.query({
      query: (name) => `${name}`,
    }),
    getPokemonByName: builder.query({
      query: (name) => `pokemon/${name}`,
    }),
    getPokemonByGenration: builder.query({
      query: () => `generation`,
    }),
  }),
});

export const { useGetPokemonQuery, useGetPokemonByNameQuery, useGetPokemonByGenrationQuery } = PokemonApi;
