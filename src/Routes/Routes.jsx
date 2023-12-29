import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Booking from "../Pages/Booking/Booking";
import Bookings from "../Pages/Bookings/Bookings";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: '/booking/:id',
        element: <Booking></Booking>,
        loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path: '/bookings',
        element: <Bookings></Bookings>,
      },
    ],
  },
]);
export default router;
