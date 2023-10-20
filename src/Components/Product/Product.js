import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGetPokemonByNameQuery } from "../../Services/Pokemone/PokemoneApi";
import { useNavigate } from "react-router-dom";
import {useFavorites} from "../../Hooks/useFavorites";
import { handleAddRemove} from "../../Services/Pokemone/PokemoneSlice"
import "./Product.css";
import { useDispatch } from "react-redux";
const Product = ({ pokemone }) => {
  const dispatch = useDispatch();
  const [favorites, toggleFavorite] = useFavorites("favorites")
  const navigate = useNavigate();
  const { data, error, isLoading } = useGetPokemonByNameQuery(pokemone.name);
  if (isLoading) {
    return "Loading...";
  }

  if (error) {
    return "Error loading Pokémon data";
  }
  const isFavorite = favorites.some(
    (favorite) => favorite.name === data.name
  );
  const onClick = (name) => {
    navigate(`/detail/${pokemone.name}`, {
      state: {
        name: name,
      },
    });
  };
  
  return (
    <div className="border  p-[20px] rounded-lg bg-[#f0f0f0] shadow-xl   w-[450px]">
      <div className="px-2 py-4">
        <div className="flex justify-between items-center text-[22px] text-[#333] font-sans font-bold capitalize gap-x-[20px]">
          <h2 className="block "> {data.name}</h2>
          <FontAwesomeIcon
            onClick={()=>{toggleFavorite(data);dispatch(handleAddRemove(prev=>!prev))}}
            icon="heart"
            className={`text-gray-500 float-right cursor-pointer w-[27px] h-[27px] heartRed${isFavorite}`}
          />
        </div>
        <div
          className="my-[30px] mx-auto w-[150px] h-[150px] 
                p-[5px] bg-white shadow-xl
                rounded-full"
        >
          <img
            className="w-full h-full"
            src={data.sprites.front_default}
            alt={data?.name}
          />
        </div>
        <div className="py-[20px] border-b flex border-b-[#4f4f4f] justify-between">
          <h3 className="block text-center text-[18px] text-[#333] font-sans font-bold">
            Weight
          </h3>
          <p className="block text-center text-[18px] text-[#333] font-sans font-bold">
            {data.weight}lbs
          </p>
        </div>
        <div className="py-[20px] flex justify-between">
          <h3 className="block text-center text-[18px] text-[#333] font-sans font-bold">
            Height
          </h3>
          <p className="block text-center text-[18px] text-[#333] font-sans font-bold">
            {data.height}cm
          </p>
        </div>
      </div>
      <button
        onClick={() => onClick(data.name)}
        className="bg-[#111827] hover:bg-[#F6BD0E] text-white font-bold py-2 px-5 rounded-lg text-base mx-auto my-2 transition-colors duration-300 block"
      >
        View Details
      </button>
    </div>
  );
 };
export default Product;