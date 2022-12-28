import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import Home from "../Pages/Home/Home";
import Details from "../Pages/Media/Details";
import Media from "../Pages/Media/Media";
import Login from "../Share/Login/Login";
import SignUp from "../Share/Login/SignUp";
import PrivateRoutes from "./PrivateRoutes";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/media',
                loader: () => fetch('http://localhost:5000/post'),
                element: <Media></Media>
            },
            {
                path: '/about',
                element: <PrivateRoutes><About></About></PrivateRoutes>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/post/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/post/${params.id}`),
                element: <Details></Details>
            }

        ]
    }
])
