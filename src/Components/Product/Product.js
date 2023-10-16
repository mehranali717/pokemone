import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGetPokemonByNameQuery } from "../../Services/Pokemone/Pokemone";

const Product = ({name}) => {
    const { data, error, isLoading } = useGetPokemonByNameQuery(name);
    if (isLoading) {
        return 'Loading...';
      }
    
      if (error) {
        return 'Error loading Pokémon data';
      }
    return  <div className="w-[350px] border rounded-lg shadow dark:bg-gray-800 p-5">
        <FontAwesomeIcon icon="heart" className="text-gray-200 float-right cursor-pointer"/>
                <div className="flex flex-col items-center">
                    <img className="w-24 h-24 mb-3 rounded-full shadow-lg cursor-pointer custome-bg" src={data.sprites.front_default} alt="pokemon" />
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white capitalize">{name}</h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400 capitalize">{data.types[0].type.name}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{toKilograms(data.weight)} Kg</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{toCentimeters(data.height)} Cm</span>
                    <a href="/" className="w-[200px] inline-block px-4 py-2 font-bold text-center text-[#4f4f4f] rounded-[20px] mt-6 tracking-[2px] custome-bg">View Details</a>
                </div>
</div>
}
export default Product;
const toKilograms = (hg) => {
    return hg / 10;
  };
const toCentimeters = (val) => {
    return val * 10;
  };