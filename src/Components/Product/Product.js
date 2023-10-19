import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGetPokemonByNameQuery } from "../../Services/Pokemone/Pokemone";
import { useNavigate } from "react-router-dom";
import {useFavorites} from "../../Hooks/useFavorites";
import "./Product.css";
import { useState } from "react";
const Product = ({ pokemone }) => {
  const [toggleFavorite] = useFavorites("favorites")
  const [isFavorite, setIsFavorite] = useState(false);
  const { data, error, isLoading } = useGetPokemonByNameQuery(pokemone.name);
  const navigate = useNavigate();
  const onClick = (name) => {
    navigate("/detail", {
      state: {
        name: name,
      },
    });
  };
  if (isLoading) {
    return "Loading...";
  }

  if (error) {
    return "Error loading Pokémon data";
  }
  return (
    <div className="w-[250px] border rounded-lg shadow dark:bg-gray-800 p-5">
      <FontAwesomeIcon
        onClick={()=>{toggleFavorite(data);
          setIsFavorite(Prev=>!Prev)}}
        icon="heart"
        className={`text-gray-200 float-right cursor-pointer w-[27px] h-[27px] heartRed${isFavorite}`}
      />
      <div className="flex flex-col items-center">
        <img
          onClick={() => onClick(pokemone.name)}
          className="w-24 h-24 mb-3 rounded-full shadow-lg cursor-pointer custome-bg"
          src={data.sprites.front_default}
          alt="pokemon"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white capitalize">
          {pokemone.name}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400 capitalize">
          {data.types[0].type.name}
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {toKilograms(data.weight)} Kg
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {toCentimeters(data.height)} Cm
        </span>
        <button
          onClick={() => onClick(pokemone.name)}
          className="inline-block px-4 py-2 font-bold text-center text-[#4f4f4f] rounded-[20px] mt-6 tracking-[2px] cursor-pointer custome-bg"
        >
          View Details
        </button>
      </div>
    </div>
  );
};
export default Product;
const toKilograms = (hg) => {
    return hg / 10;
  };
const toCentimeters = (val) => {
    return val * 10;
  };