import { useLocation } from "react-router-dom";
import { useGetPokemonByNameQuery } from "../../Services/Pokemone/Pokemone";
import { PokimoneDetail } from "../../Components";
const Detail =()=> {
    const location = useLocation();
    const name = location.state.name;
    const { data, error, isLoading, isSuccess } = useGetPokemonByNameQuery(name);
    if (isLoading) {
        return "Loading...";
      }
    
      if (error) {
        return "Error loading Pokémon data";
      }
      const imageSrcs = [data.sprites.back_default, data.sprites.back_shiny, data.sprites.front_default, data.sprites.front_shiny]
      return (
        <>
             {isSuccess && <PokimoneDetail data={data}/>}
        </>
      );
}
export default Detail;