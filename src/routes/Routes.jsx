import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import Rooms from "../pages/Rooms";


const router = createBrowserRouter([
   {
    path: '/',
    element: <Main></Main>,
    children: [
      {
    index: true,
    element: <Home></Home>,

    },
    {
      path: '/rooms',
      element: <Rooms></Rooms>,
  
      },
    {
      path: '/login',
      element: <Login></Login>,
  
      },
      {
         path: '/registration',
         element: <Register></Register>,
     
         },
   
   ]
   },
])

export default router;