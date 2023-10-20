import { Navigate, useRoutes } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import React, { Suspense } from "react";

const Home = React.lazy(() => import('../Pages/Home/Home'));
const Detail = React.lazy(() => import('../Pages/Detail/Detail'));
const Genration = React.lazy(() => import('../Pages/Genration/Genration'));
const Comparison = React.lazy(() => import('../Pages/Comparison/Comparison'));

const Routes =()=>{
    const routes = useRoutes([
        {
            element:<MainLayout />,
            children:[
                {path:"/home",element:<Home/>},
                {path:"/detail/:name",element:<Detail/>},
                {path:"/genration" , element:<Genration />},
                {path:"/comparison", element:<Comparison />},
                {path:"*" , element:<Navigate to="/home" />}
            ]
        }
    ])
    return <Suspense fallback={<div>Loading...</div>} >
        {routes}
    </Suspense>
}
export default Routes;