import { Outlet } from "react-router-dom"
import Navbar from "../shared/Navbar/Navbar"
import PreLoader from "../components/PreLoader/PreLoader";
import useSetLoader from "../hooks/useSetLoader";
// import HomePageTransition from "../components/Animation/HomePageTransition/HomePageTransition";

const MainLayout = () => {

    const loading = useSetLoader();
    if (loading) return <PreLoader />;

    return (
        <>        
            {/* <HomePageTransition /> */}
            <div className="mb-20">
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
        </>
    )
}

export default MainLayout
