import logoImg from "../../Assets/Images/logo.png"
const Logo = () => {
    return <a href="/" className="w-[180px] h-[80px]">
                <img src={logoImg} alt="Logo" className="w-[100%] h-[100%]"/>
    </a>
}
export default Logo;