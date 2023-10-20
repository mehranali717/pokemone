import React, { useState } from "react";
// import Loader from "../component/Loader";
import Detail from "../Detail/Detail";
import {
  useGetAllPokemonQuery,
  useGetPokemonByNameQuery,
} from "../../Services/Pokemone/PokemoneApi";
import "./Comparison.css";
import { PokimoneDetail, Product } from "../../Components";
import Loader from "../../Loader/Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Comparison() {
  const [pokemone1ToSearch, setPokemone1ToSearch] = useState("");
  const [pokemone2ToSearch, setPokemone2ToSearch] = useState("");
  const {
    data: allPokimone,
    isLoading: allPokimoneLoading,
    isError: allPokimoneLoadingError,
    isSuccess: successLoading,
  } = useGetAllPokemonQuery("");
  const { data: searchedPokemon1, isLoading: isLoadingData1, isSuccess:isSuccessLoaded1 } =
    useGetPokemonByNameQuery(pokemone1ToSearch);
  const { data: searchedPokemon2, isLoading: isLoadingData2, isSuccess:isSuccessLoaded2 } =
    useGetPokemonByNameQuery(pokemone2ToSearch);
  if (allPokimoneLoading) {
    return "Loading...";
  }
  if (isLoadingData2) {
    return "Loading...";
  }
  return (
    <>
      {/* {allPokimoneLoading && <Loader />}
      {allPokimoneLoadingError && <span>Error loading Pokémon details.</span>}
      {successLoading && ( */}
        <div className="mt-[100px] w-[85%]">
          <div className="flex justify-between mx-[50px]">
            <div className="flex flex-col gap-[20px] items-center">
              <select
                onChange={(e) => setPokemone1ToSearch(e.target.value)}
                value={pokemone1ToSearch}
              >
                <option value="select" disabled>
                  Select a Pokémon
                </option>
                {allPokimone.results.map((Pokemon) => (
                  <option value={Pokemon.name}>{Pokemon.name}</option>
                ))}
              </select>
              {searchedPokemon1!=="" && <PokimoneDetail data={searchedPokemon1} />}
             {/* {isSuccessLoaded1 && searchedPokemon1 && <PokimoneDetail data={searchedPokemon1} />} */}
            </div>
            <FontAwesomeIcon
              icon="code-compare"
              className="w-[50px] h-[50px] self-center"
            />
            <div className="flex flex-col gap-[20px] items-center">
              <select onChange={(e) => setPokemone2ToSearch(e.target.value)}>
                <option value="select" disabled>
                  Select a Pokémon
                </option>
                {allPokimone.results.map((Pokemon) => (
                  <option value={Pokemon.name}>{Pokemon.name}</option>
                ))}
              </select>
              <PokimoneDetail data={searchedPokemon2} />
              {/* {isSuccessLoaded2 && searchedPokemon2 && <PokimoneDetail data={searchedPokemon2} />} */}
            </div>
          </div>
        </div>
      {/* )} */}
    </>
  );
}

export default Comparison;
