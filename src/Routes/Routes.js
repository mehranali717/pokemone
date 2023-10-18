import { useRoutes } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import { Home, Detail } from "../Pages";
const Routes =()=>{
    return useRoutes([
        {
            element:<MainLayout />,
            children:[
                {path:"/",element:<Home/>},
                {path:"/detail",element:<Detail/>}
            ]
        }
    ])
}
export default Routes;