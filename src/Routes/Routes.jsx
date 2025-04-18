import { createBrowserRouter } from "react-router-dom";
import MainLayout from './../Layout/MainLayout';
import HomeLayout from './../page/Home/HomeLayout/HomeLayout';
import ErrorPage from "../page/ErrorPage/ErrorPage";
import Projects from "../page/Projects/Projects";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <HomeLayout></HomeLayout>
            },
            {
                path: "/projects",
                element: <Projects></Projects>
            },
            // {
            //     path: "/home",
            //     element: <HomeLayout></HomeLayout>
            // },
        ],
    },
]);