import { useRoutes } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import { Home } from "../Pages";
const Routes =()=>{
    return useRoutes([
        {
            element:<MainLayout />,
            children:[
                {path:"/",element:<Home/>}
            ]
        }
    ])
}
export default Routes;