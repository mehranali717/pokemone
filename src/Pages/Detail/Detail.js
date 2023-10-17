import { useLocation } from "react-router-dom";
import { useGetPokemonByNameQuery } from "../../Services/Pokemone/Pokemone";
const Detail =()=> {
    const location = useLocation();
    const name = location.state.name;
    const { data, error, isLoading } = useGetPokemonByNameQuery(name);
    if (isLoading) {
        return "Loading...";
      }
    
      if (error) {
        return "Error loading Pokémon data";
      }
      const imageSrcs = [data.sprites.back_default, data.sprites.back_shiny, data.sprites.front_default, data.sprites.front_shiny]
      console.log(data)
      return <div className="w-[900px] border rounded-lg shadow dark:bg-gray-800 p-5 flex flex-col items-center mx-auto my-[30px]">
                <img
                className="w-[130px] h-[130px] mb-3 rounded-full shadow-lg cursor-pointer custome-bg"
                src={data.sprites.front_default}
                alt="pokemon"
                />
                {/* {Object.keys(item).map((name)=>{return <h2 className="text-[#fff] text-[40px] text-center pb-8 capitalize">{name}   {item[name]}</h2>})} */}
                <h2 className="text-[#fff] text-[40px] text-center pb-8 capitalize">{data.name}</h2>
                <h3 className="text-[#fff] text-[25px] text-center pb-3 capitalize self-start">Abilities</h3>
                <div className="flex flex-wrap justify-between gap-5">
                {data.abilities && data.abilities.map((poke)=><span className="text-[#4f4f4f] tracking-[2px] font-bold custome-bg px-4 py-2 bg-[#e65c00] rounded-full capitalize">{poke.ability.name}</span>)}
                </div>
                <span className="divider" />
                <h3 className="text-[#fff] text-[25px] text-center pb-3 capitalize self-start">Sprites</h3>
                <div className="flex flex-wrap justify-between gap-5">
                {imageSrcs.map((src)=><img
                            className="w-[70px] h-[70px] mb-3 rounded-full shadow-lg cursor-pointer custome-bg"
                            src={src}
                            alt="pokemon"
                />)}
                </div>
                <span className="divider" />
                <h3 className="text-[#fff] text-[25px] text-center pb-3 capitalize self-start">Experience</h3>
                <div className="flex flex-wrap justify-between gap-5">
                <span className="text-[#4f4f4f] tracking-[2px] font-bold custome-bg px-4 py-2 bg-[#e65c00] rounded-full capitalize">{data.base_experience}</span>
                </div>
                <span className="divider" />
                <h3 className="text-[#fff] text-[25px] text-center pb-3 capitalize self-start">Moves</h3>
                <div className="flex flex-wrap justify-between gap-5">
                {data.moves && data.moves.map((poke)=><span className="text-[#4f4f4f] tracking-[2px] font-bold custome-bg px-4 py-2 bg-[#e65c00] inline-block rounded-full capitalize">{poke.move.name}</span>)}
                </div>
                <span className="divider" />
            </div>
}
export default Detail;