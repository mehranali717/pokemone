import React, { useEffect, useMemo, useState } from "react";
import "./Home.css";
import { useGetPokemonQuery } from "../../Services/Pokemone/PokemoneApi";
import { Input, Product } from "../../Components";
const Home = () => {
  const [page, setPage] = useState(1);
  const [pokimoneToSearch, setPokimoneToSearch] = useState("");
  const { data, error, isLoading } = useGetPokemonQuery(page);
  const pokimone = useMemo(() => {
    return pokimoneToSearch;
  }, []);
  if (isLoading) {
    return "Loading...";
  }

  if (error) {
    return "Error loading Pokémon data";
  }
  const handleFilter = (name) => {
    const pokimone = data.results.find(
      (d) => d.name.trim().toLowerCase() === name.trim().toLowerCase()
    );
    setPokimoneToSearch(pokimone);
  };
  return (
    <div className="w-[100%] ">
      <div className="flex flex-col items-center mt-[100px]">
        <input onChange={(e) => handleFilter(e.target.value)} />
        <div className="flex flex-col items-center gap-5 mx-start p-[50px] w-[100%]">
          {pokimoneToSearch ? (
            <Product pokemone={pokimoneToSearch} />
          ) : (
            <>
              <div className="scrollable w-[100%] flex flex-wrap justify-center gap-5 heightScroable">
                {data.results.map((poke, index) => {
                  return <Product pokemone={poke} key={index} />;
                })}
              </div>
              <div className="flex w-[250px] justify-between self-end">
                {page > 1 && (
                  <button
                    onClick={() => setPage(page - 1)}
                    className="self-center text-white text-[20px] font-bold bg-[#111827] px-4 px-1 rounded-[5px]"
                  >
                    Prev
                  </button>
                )}
                <button
                  onClick={() => setPage(page + 1)}
                  className="self-center text-white text-[20px] font-bold bg-[#111827] px-4 px-1 rounded-[5px] self-end"
                >
                  Next
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default Home;
{
  /* */
}
