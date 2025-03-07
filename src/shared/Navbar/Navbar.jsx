import logo_light from "../../../public/logo/logo_4-removeb.png"
// import logo_dark from "../../../public/logo/logo_2-removebg.png"
import { Link } from "react-router-dom";
import Toggle from "../../components/Toggle/Toggle";
import './navbar.css'
// import { useEffect, useState } from "react";
const Navbar = () => {


    return (
        <>
            <div className="fixed top-0 w-full z-50">
                <div className="container mx-auto dark:text-white">
                    <nav className="navbar px-4 md:px-12 flex items-center justify-between">
                        <div className="flex items-center lg:hidden">
                            <figure>
                                <img
                                    src={logo_light}
                                    alt="Logo"
                                    className="w-12 h-12 mx-auto"
                                />
                            </figure>
                        </div>
                        {/* <Link
                            href="/"
                            className="flex items-center lg:hidden"
                        >
                            <figure>/
                                <img
                                    src={logo_light}
                                    alt="Logo"
                                    className="w-12 h-12 mx-auto"
                                />
                            </figure>
                        </Link> */}
                        <div className="hidden md:flex flex-1 justify-center items-center">
                            <ul className="flex items-center justify-center space-x-8 group">
                                <li>
                                    <a
                                        href="#articles"
                                        data-v-ebc98991
                                    >
                                        Articles
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#about"
                                        data-v-ebc98991
                                    >
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#about"
                                        data-v-ebc98991
                                    >
                                        <figure>
                                            <img
                                                src={logo_light}
                                                alt="Logo"
                                                className="w-12 h-12 mx-auto"
                                            />
                                        </figure>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#portfolio"
                                        data-v-ebc98991
                                    >
                                        Portfolio
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#blog"
                                        data-v-ebc98991
                                    >
                                        Blog
                                    </a>
                                </li>
                                <li className="">
                                    <Toggle></Toggle>
                                </li>
                            </ul>
                        </div>

                        <div className="dropdown dropdown-end md:hidden">
                            <label tabIndex={0} className="btn btn-ghost btn-circle">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                </svg>
                            </label>
                            <ul
                                tabIndex={0}
                                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                            >
                                <li>
                                    <a href="#about">About</a>
                                </li>
                                <li>
                                    <a href="#portfolio">Portfolio</a>
                                </li>
                                <li>
                                    <a href="#education">Education</a>
                                </li>
                                <li>
                                    <a href="#skill">Skill</a>
                                </li>
                                <li>
                                    <a href="#blog">Blog</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Navbar




// const [isScrolled, setIsScrolled] = useState(false);

// useEffect(() => {
//     const handleScroll = () => {
//         setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//         window.removeEventListener("scroll", handleScroll);
//     };
// }, []);