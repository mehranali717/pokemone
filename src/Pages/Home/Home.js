import React, { useState } from 'react';
import "./Home.css";
import { useGetPokemonQuery } from '../../Services/Pokemone/Pokemone';
import { Input, Product } from '../../Components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CustomModal from '../../Modal/Modal';

const Home = () => {
  const[page ,setPage] =useState(1)
  const { data, error, isLoading } = useGetPokemonQuery(page);
  if (isLoading) {
    return 'Loading...';
  }

  if (error) {
    return 'Error loading Pokémon data';
  }
  const onClick =()=>{
    console.log("clicked");
  }
  return <div className='w-[100%] '>
              <div className='flex flex-col items-center mt-[100px]'>
              <Input onChange={onClick}/>
                <div className='flex flex-col items-center gap-5 mx-start p-[50px] w-[100%]' >
                    <div className="scrollable w-[100%] flex flex-wrap justify-between gap-y-5 heightScroable">
                      {data.results.map((poke, index)=><Product pokemone={poke} key={index}/>)}
                    </div>
                    <div className='flex w-[250px] justify-between self-end'>
                      {page > 1 && <button onClick={()=>setPage(page-1)} className='self-center text-white text-[20px] font-bold bg-[#111827] px-4 px-1 rounded-[5px]'>Prev</button>}
                      <button onClick={()=>setPage(page+1)} className='self-center text-white text-[20px] font-bold bg-[#111827] px-4 px-1 rounded-[5px] self-end'>Next</button>
                    </div>
                    </div>
              </div>
         </div>
}
export default Home;