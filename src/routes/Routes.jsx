import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import Rooms from "../pages/Rooms";
import RoomDetails from "../pages/RoomDetails";
import MyBookings from "../pages/MyBookings";
import Review from "../pages/Review";
import UpdateDate from "../pages/UpdateDate";
import Error from "../pages/Error";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
   {
    path: '/',
    errorElement:<Error></Error>,
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
        path: '/roomdetails/:id',
        element: <RoomDetails></RoomDetails>,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_URL}/roomdetails/${params.id}`),
    
        },
    {
      path: '/login',
      element: <Login></Login>,
  
      },
      {
         path: '/registration',
         element: <Register></Register>,
     
         },
        
         {
          path: '/mybookings',
          element: <PrivateRoute><MyBookings></MyBookings></PrivateRoute>,
      
          },
          {
            path: '/review/:id',
            element: <Review></Review>,
            loader: ({ params }) =>
              fetch(`${import.meta.env.VITE_URL}/booking/${params.id}`)
            },
            {
              path: '/update/:id',
              element: <PrivateRoute><UpdateDate></UpdateDate></PrivateRoute>,
              loader: ({ params }) =>
                fetch(`${import.meta.env.VITE_URL}/update/${params.id}`)
              },
   ]
   },
])

export default router;