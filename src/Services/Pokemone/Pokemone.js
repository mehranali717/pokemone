import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const PokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getPokemon: builder.query({
      query: (page) => `pokemon/?offset=${(page-1) * 6}&limit=6`,
    }),
    getPokemonByName: builder.query({
      query: (name) => `pokemon/${name}`,
    }),
    getPokemonByGenration: builder.query({
      query: (name) => `generation/${name}`,
    }),
  }),
});

export const { useGetPokemonQuery, useGetPokemonByNameQuery, useGetPokemonByGenrationQuery } = PokemonApi;
