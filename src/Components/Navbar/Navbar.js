import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () =>{
    const navItems = [
        {title:"comparison"},
        {title:"favourites"}
    ]
    return <ul className="flex w-[320px] justify-between">
                {navItems.map((item, index)=> <li className="text-[#fff] font-[600] text-[23px] capitalize" key={index}>{item.title === "comparison" && <FontAwesomeIcon icon="code-compare" className="pe-2"/>}{item.title}</li>)}
            </ul>
}
export default Navbar;