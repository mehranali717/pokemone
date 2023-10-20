import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Favourite from "../Favourite/Favourite";
import { useMemo } from "react";
const Navbar = () =>{
    const navItems = [
        {title:"comparison", icon:"code-compare", url:"/comparison"},
        // {title:"favourites", icon:"heart", url:"/"}
    ]
    const memoizedFavourite = useMemo(() => <Favourite />, []);
    return  <ul className="flex w-[390px] justify-between flex-wrap">
                {navItems.map((item, index)=> <li className="font-[600] text-[23px] capitalize" key={index}><Link to={item.url} className="text-decoration-none text-[#fff] hover:text-[#fcf903]  "><FontAwesomeIcon icon={item.icon} className="pe-2"/>{item.title}</Link></li>)}
                {memoizedFavourite}
            </ul>                   
}
export default Navbar;