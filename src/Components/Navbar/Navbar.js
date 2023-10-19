import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Favourite from "../Favourite/Favourite";
const Navbar = () =>{
    const navItems = [
        {title:"comparison", icon:"code-compare", url:"/"},
        // {title:"favourites", icon:"heart", url:"/"}
    ]
    return  <ul className="flex w-[390px] justify-between flex-wrap">
                {navItems.map((item, index)=> <li className="text-[#fff] hover:text-[#fcf903] font-[600] text-[23px] capitalize" key={index}><Link to={item.url}><FontAwesomeIcon icon={item.icon} className="pe-2"/>{item.title}</Link></li>)}
                <Favourite />
            </ul>                   
}
export default Navbar;