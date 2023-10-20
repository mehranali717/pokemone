import { Outlet } from "react-router-dom";
import Header from "../../Sections/Header/Header";
import Sidebar from "../../Sections/Sidebar/Sidebar";

const MainLayout =()=>{
    return <>
                <Header />
                    <div className="w-[95%] mx-start flex justify-between">
                        <Sidebar />
                        <Outlet className="w-[80%]"/>
                    </div>
    </>
}
export default MainLayout;