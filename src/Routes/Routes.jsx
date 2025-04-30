import { createBrowserRouter } from "react-router-dom";
import MainLayout from './../Layout/MainLayout';
import HomeLayout from './../page/Home/HomeLayout/HomeLayout';
import ErrorPage from "../page/ErrorPage/ErrorPage";
import Projects from "../page/Projects/Projects";
import CreateProjects from "../page/CreateProjects/CreateProjects";

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
            {
                path: "/create-procjects",
                element: <CreateProjects></CreateProjects>
            },
        ],
    },
]);