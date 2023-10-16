import React from 'react';
import "./Home.css";
import { useGetPokemonByNameQuery } from '../../Services/Pokemone/Pokemone';
import { Product } from '../../Components';

const Home = () => {
  const { data, error, isLoading } = useGetPokemonByNameQuery('');

  if (isLoading) {
    return 'Loading...';
  }

  if (error) {
    return 'Error loading Pokémon data';
  }
  return <div className='flex flex-wrap gap-y-12 justify-between w-[1170px] mx-auto py-[50px]'>
            {data.results.map((poke, index)=><Product name={poke.name} key={index}/>)}
         </div>
}
export default Home;