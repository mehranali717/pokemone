import { Link, useNavigate } from "react-router-dom";
import { useGetPokemonByGenrationQuery } from "../../Services/Pokemone/PokemoneApi";

const Sidebar = ()=>{
  const navigate = useNavigate();
      const { data, isLoading, error} = useGetPokemonByGenrationQuery("");
      if (isLoading) {
        return "Loading...";
      } 
      if (error) {
        return "Error loading Pokémon data";
      }
      const onClick = (name) => {
        navigate("genration", {
          state: {
            name: name,
          },
        });
      };
    return <div className="bg-[#f0f0f0] h-[89vh] mt-[70px] bottom-[2px] w-[20%] p-9 pe-0">
            <h3 className="font-[700] flex flex-col text-[#7f7f7f] text-[18px] border-b-2 border-b-[#4f4f4f] mb-[10px]">Genrations</h3>
            <ul className="flex flex-col gap-y-2 ps-0">
                {data.results.map((item, index)=>
                    <a onClick={()=>onClick(item.name)} className="hover:bg-[#d1e0e0] font-[700] text-[#7f7f7f] text-decoration-none transition duration-[0.6s]  px-8 py-2 rounded-[5px] self-start capitalize cursor-pointer text-[18px]" key={index}>{item.name}</a>)}
            </ul>
    </div>
}
export default Sidebar;