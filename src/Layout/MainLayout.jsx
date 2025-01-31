import { Outlet } from "react-router-dom"
import Navbar from "../shared/Navbar/Navbar"

const MainLayout = () => {
    return (
        <>
            <div className="mb-20">
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
        </>
    )
}

export default MainLayout
