import { Navbar, Logo} from "../../Components";

const Header = () =>{
    return <header className="fixed w-[100%] border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <div className="w-[90%] mx-auto flex justify-between items-center">
                    <Logo />
                    <Navbar/>
                </div>
    </header>
}
export default Header;