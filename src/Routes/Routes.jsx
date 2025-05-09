import { createBrowserRouter } from "react-router-dom";
import MainLayout from './../Layout/MainLayout';
import HomeLayout from './../page/Home/HomeLayout/HomeLayout';
import ErrorPage from "../page/ErrorPage/ErrorPage";
import Projects from "../page/Projects/Projects";
import CreateProjects from "../page/CreateProjects/CreateProjects";
import Education from "../page/Education/Education";
import About from "../page/About/About";

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
            {
                path: "/education-background",
                element: <Education></Education>
            },
            {
                path: "/about",
                element: <About></About>
            },
        ],
    },
]);