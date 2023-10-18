import React from 'react';
import "./Home.css";
import { useGetPokemonQuery } from '../../Services/Pokemone/Pokemone';
import { Product } from '../../Components';

const Home = () => {
  const { data, error, isLoading } = useGetPokemonQuery('pokemon');
console.log({data});
  if (isLoading) {
    return 'Loading...';
  }

  if (error) {
    return 'Error loading Pokémon data';
  }
  return <div className='flex flex-col items-center '>
              <select className='font-[600] mt-10 shadow-xl' >
              {data.results.map((poke, index)=><option value={poke.name} key={index} className='font-[600]'>{poke.name}</option>)}
              </select>
              <div className='flex flex-wrap gap-y-12 justify-between w-[1170px] mx-auto py-[50px]' >
              {data.results.map((poke, index)=><Product pokemone={poke} key={index}/>)}
              </div>
         </div>
}
export default Home;