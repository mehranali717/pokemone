import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./Favourite.css";
import AOS from "aos";
import "aos/dist/aos.css";
import {useFavorites} from "../../Hooks/useFavorites";
AOS.init();
const Favourite = () => {
  const [favorites, toggleFavorite] = useFavorites("favorites")
  console.log({favorites});
  const [isDisplay, setIsDisplay] = useState(false);
  return (
    <>
      <div
        onClick={() => {setIsDisplay((prev) => !prev)}}
        className=" flex items-center gap-3 text-[#2b2f32] text-[#ffffff] hover:text-[#fcf903] cursor-pointer"
      >
        <div className="relative">
          <FontAwesomeIcon
            icon="heart"
            className="w-[25px] h-[25px] pt-[5px]"
          />
          <span className="bg-[#fd4b6b] rounded-[50%] text-[#fff] inline-block text-[12px] font-[600] absolute right-[-12px] text-center top-[-5px] w-[21px] h-[21px]">
            {favorites.length}
          </span>
        </div>
        <span className="text-[#fff] hover:text-[#fcf903] font-[500] text-[23px] capitalize">
          Favourites
        </span>
      </div>
      {isDisplay && (
        <div className="favWrapper" data-aos="fade-left">
          <div className="favHeader">
            <h3 className="favTitle text-xl">Favourite List</h3>
            <span
              className="hamburger"
              onClick={() => setIsDisplay((prev) => !prev)}
            >
              <FontAwesomeIcon icon="xmark" />
            </span>
          </div>
          <div className="scrollable">
          {favorites.length>0 && favorites.map((poke, index)=>{
           return <div className="favBody flex items-center justify-between" key={index}>
              <img
                className="w-24 h-24 mb-3 rounded-full shadow-xl cursor-pointer customeBgWithoutHover"
                src={poke.sprites.front_default}
                alt="img"
              />
              <div className="flex flex-col">
                <span className="mb-1 text-md font-medium text-gray-900 dark:text-[#2f2f2f] capitalize">
                  {poke.name}
                </span>
                <span className="text-sm dark:text-[#2f2f2f] capitalize">
                  {poke.types[0].type.name}
                </span>
                <span className="text-sm dark:text-[#2f2f2f]">
                  {toKilograms(poke.weight)} Kg
                </span>
                <span className="text-sm dark:text-[#2f2f2f]">
                  {toCentimeters(poke.height)} Cm
                </span>
              </div>
              <FontAwesomeIcon
                onClick={()=>toggleFavorite(poke)}
                icon="heart"
                className={`text-[red] float-right cursor-pointer w-[27px] h-[27px] self-start`}
              />
            </div>
        }
          )}
          </div>

          <button
            className="defaultBtn"
            onClick={() => setIsDisplay((prev) => !prev)}
          >
            Close
          </button>
        </div>
      )}
    </>
  );
};
export default Favourite;
const toKilograms = (hg) => {
  return hg / 10;
};
const toCentimeters = (val) => {
  return val * 10;
};
