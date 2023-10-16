import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";
const Header = () =>{
    return <header className="border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <div className="w-[1140px] mx-auto flex justify-between items-center">
                    <Logo />
                    <Navbar/>
                </div>
    </header>
}
export default Header;