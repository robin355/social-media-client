import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import Home from "../Pages/Home/Home";
import Details from "../Pages/Media/Details";
import Media from "../Pages/Media/Media";
import ErrorPage from "../Share/ErrorPage/Errorpage";
import Login from "../Share/Login/Login";
import SignUp from "../Share/Login/SignUp";
import PrivateRoutes from "./PrivateRoutes";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
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
                loader: () => fetch('https://social-media-server-red.vercel.app/post'),
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
                loader: ({ params }) => fetch(`https://social-media-server-red.vercel.app/post/${params.id}`),
                element: <Details></Details>
            }

        ]
    }
])
