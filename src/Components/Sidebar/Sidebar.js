import { Link, useNavigate } from "react-router-dom";
import { useGetGenrationQuery } from "../../Services/Pokemone/Pokemone";
import { useEffect } from "react";

const Sidebar = () => {
  const navigate = useNavigate();
  const { data, isLoading, error } = useGetGenrationQuery("");
  console.log({data});
  if (isLoading) {
    return "Loading...";
  }
  if (error) {
    return "Error loading Pokémon data";
  }
 
  
  const onClick = (item) => {
    navigate("/genration", {
      state: {
        item: item,
      },
    });
  };
  return (
    <div className="bg-[#f0f0f0] h-[89vh] mt-[70px] bottom-[2px] w-[300px] p-9">
      <h3 className="font-[700] flex flex-col text-[#7f7f7f] text-[18px] border-b-2 border-b-[#7f7f7f] mb-[10px]">
        Genrations
      </h3>
      <ul className="flex flex-col gap-4">
        {data.results.map((item, index) => (
          <a
            onClick={() => onClick(item)}
            className="hover:bg-[#d1e0e0] transition duration-[0.6s]  px-8 py-2 rounded-[5px] self-start capitalize cursor-pointer"
            key={index}
          >
            {item.name}
          </a>
        ))}
      </ul>
    </div>
  );
};
export default Sidebar;
