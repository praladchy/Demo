import SignUp from "../page/SignUp/SignUp";
import Login from "../page/Login/Login";
import Home from "../page/Home/Home";
const Navpath =[
    {
        path:"/SignUp",
        element:<SignUp/>,
    
    },
    {
        path:"/Login",
        element:<Login/>,
    },
    {
        path:"/",
        element:<Home/>,
    }
];
export {Navpath}