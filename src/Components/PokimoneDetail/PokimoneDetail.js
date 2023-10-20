import { memo } from "react";

const PokimoneDetail = ({data}) => {
    return  <>
    {
      data.name && <div className="w-[600px] mx-auto py-10">
      <div className="border  p-[50px] rounded-lg bg-[#f0f0f0] shadow-xl w-full mx-auto">
        <div className="flex flex-col items-center gap-x-[30px]">
          <div className="py-[20px]">
            <span className="block text-center text-[30px] text-[#333] font-sans font-bold capitalize">
              {data.name}
            </span>
          </div>
          <div
            className=" w-[150px] h-[150px] 
                  p-[35px] bg-white shadow-xl
                  rounded-full"
          >
            <img
              className="w-full h-full"
              src={data.sprites?.front_default}
              alt="Name"
            />
          </div>
        </div>
        <div className="py-[20px] border-b">
          <h3 className="block pb-[15px] text-center text-[18px] text-[#333] font-sans font-bold">
            Types
          </h3>
          <ul className="flex justify-center gap-x-[10px] ">
            {data.types.map((type, index) => (
              <li
                key={index}
                className="px-[18px] py-[8px] font-bold text-white bg-[#111827] rounded-full"
              >
                {type.type.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="py-[20px] border-b">
          <h3 className="block text-center pb-[15px] text-[18px] text-[#333] font-sans font-bold">
            Abilities
          </h3>
          <ul className="flex justify-center gap-x-[10px]">
            {data.abilities.map((ability, index) => (
              <li
                key={index}
                className="px-[18px] py-[8px] font-bold text-white bg-[#111827] rounded-full"
              >
                {ability.ability.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="py-[20px] border-b">
          <h3 className="block text-center pb-[15px] text-[18px] text-[#333] font-sans font-bold">
            Different Views
          </h3>
          <ul className="flex justify-center gap-x-[10px]">
            {/* {imageSrcs.map((src, index) =><img src={src}></img>)} */}
          </ul>
        </div>
  
        <div className="py-[20px] border-b flex justify-between">
          <h3 className="block text-center text-[18px] text-[#333] font-sans font-bold">
            Base Experience
          </h3>
          <p className="block text-center text-[18px] text-[#333] font-sans font-bold">
            {data.base_experience}
          </p>
        </div>
        <div className="py-[20px] border-b flex justify-between">
          <h3 className="block text-center text-[18px] text-[#333] font-sans font-bold">
            Order
          </h3>
          <p className="block text-center text-[18px] text-[#333] font-sans font-bold">
            {data.order}
          </p>
        </div>
        <div className="py-[20px] border-b flex justify-between">
          <h3 className="block text-center text-[18px] text-[#333] font-sans font-bold">
            Height
          </h3>
          <p className="block text-center text-[18px] text-[#333] font-sans font-bold">
            {data.height}cm
          </p>
        </div>
        <div className="py-[20px] flex justify-between">
          <h3 className="block text-center text-[18px] text-[#333] font-sans font-bold">
            Weight
          </h3>
          <p className="block text-center text-[18px] text-[#333] font-sans font-bold">
            {data.weight} lbs
          </p>
        </div>
    </div>
    </div>
    }
    
    </>
}
export default memo(PokimoneDetail);