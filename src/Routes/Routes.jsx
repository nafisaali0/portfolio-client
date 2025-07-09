import { createBrowserRouter } from "react-router-dom";
import MainLayout from './../Layout/MainLayout';
import HomeLayout from './../page/Home/HomeLayout/HomeLayout';
import ErrorPage from "../page/ErrorPage/ErrorPage";
import Projects from "../page/Projects/Projects";
import CreateProjects from "../page/CreateProjects/CreateProjects";
import Education from "../page/Education/Education";
import About from "../page/About/About";
import Contact from "../page/Contact/Contact";
import UpdateProject from "../page/UpdateProject/UpdateProject";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <HomeLayout />
            },
            {
                path: "/projects",
                element: <Projects />
            },
            {
                path: "/createProcject",
                element: <CreateProjects />
            },
            {
                path: "/update-project/:id",
                element: <UpdateProject />,
                loader: ({ params }) => fetch(`https://portfolio-server-theta-five.vercel.app/projects/${params.id}`)
            },
            {
                path: "/education-background",
                element: <Education />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
        ],
    },
]);