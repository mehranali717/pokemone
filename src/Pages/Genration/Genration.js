import { useLocation } from "react-router-dom";
import { useGetPokemonByGenrationQuery } from "../../Services/Pokemone/PokemoneApi";
import { Product } from "../../Components";

const Genration = () => {
    const location = useLocation();
    const name = location.state.name;
    const { data, isLoading, error} = useGetPokemonByGenrationQuery(name);
    if (isLoading) {
        return "Loading...";
      }
      if (error) {
        return "Error loading Pokémon data";
      }
    return <div className="w-[100%] mt-[90px] px-10">
            <div className="bg-[#f0f0f0] px-6 py-3 rounded-[10px]"><h2 className="text-[20px] text-[#555] font-[500] uppercase">{data.name}</h2></div>
            {/* {data.pokemon_species.map(()=><Product pokemone={data.name}/>)} */}
    </div>
}
export default Genration;