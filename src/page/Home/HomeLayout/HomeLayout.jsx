import { useEffect, useState } from "react";
import Profile from "../Profile/Profile"
import Skills from "../Skills/Skills"


const HomeLayout = () => {

    // const [isTransitionDone, setIsTransitionDone] = useState(false);

    // useEffect(() => {
    //     const timer = setTimeout(() => setIsTransitionDone(true), 2000); // 5s loader + 2s transition
    //     return () => clearTimeout(timer);
    // }, []);

    return (
        <>
            {/* <HomePageTransition></HomePageTransition> */}
            <div>
                <Profile></Profile>
                <Skills></Skills>
            </div>
{/* 
            <div
                className={`transition-all duration-700 ${isTransitionDone ? "blur-none" : "blur-sm"
                    }`}
            >
                <Profile />
                <Skills />
            </div> */}
        </>
    )
}

export default HomeLayout
