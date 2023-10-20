import { useLocation } from "react-router-dom";
import { useGetPokemonByGenrationQuery } from "../../Services/Pokemone/PokemoneApi";
import { Product } from "../../Components";
import { useEffect } from "react";

const Genration = () => {
    const location = useLocation();
    const item = location.state.item;
    const { data, isLoading, error} = useGetGenrationQuery(item.name);
    if (isLoading) {
      return "Loading...";
    }
    // const {data:pokemone, isLoading:pokemoneloading, error:pokemoneError} = useGetPokemonsByGenrationQuery(data.pokemon_species[0].name)
    // console.log({pokemone});
    const fetchData = async (method) => {
      try {
        const response = await fetch(
          item.url,
          {
            method: method,
          }
        );
        return await response.json();
      } catch (error) {
        console.log(error.message);
      }
    return <div className="w-[100%] mt-[90px] px-10">
            <div className="bg-[#f0f0f0] px-6 py-3 rounded-[10px]"><h2 className="text-[20px] text-[#555] font-[500] uppercase">{data.name}</h2></div>
            {/* {data.pokemon_species.map(()=><Product pokemone={data.name}/>)} */}
    </div>
}
}
export default Genration