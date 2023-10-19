import React, { useState } from 'react';
import "./Home.css";
import { useGetPokemonQuery } from '../../Services/Pokemone/Pokemone';
import { Input, Product } from '../../Components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home = () => {
  const[page ,setPage] =useState(1)
  const { data, error, isLoading } = useGetPokemonQuery(page);
  if (isLoading) {
    return 'Loading...';
  }

  if (error) {
    return 'Error loading Pokémon data';
  }
  return <div className='w-[1100px]'>
              
              <div className='flex flex-col items-center mt-[100px] '>
                <Input />
                <div className='flex items-center justify-between mx-start p-[50px] w-[1000px]' >
                    <button onClick={()=>setPage(page-1)} className='self-center '><FontAwesomeIcon className='w-[30px] h-[30px] text-gray-700' icon="backward" /></button>
                    <div className="scrollable w-[800px] flex flex-wrap justify-between gap-y-5 heightScroable">
                      {data.results.map((poke, index)=><Product pokemone={poke} key={index}/>)}
                    </div>
                    <button onClick={()=>setPage(page+1)} className='self-center'><FontAwesomeIcon icon="forward" className='w-[30px] h-[30px] text-gray-700'/></button>
                </div>
              </div>
         </div>
}
export default Home;