import { Link, NavLink } from "react-router-dom";
import logo from "../../../public/logo/logo_red_black-removebg.png"
import Toggle from "../../components/Toggle/Toggle";
import './navStyle.css'
import eachFadeInAnimation from './../../Utility/eachFadeInAnimation';
import { motion } from 'framer-motion';

const Navbar = () => {

    return (
        <>
            <div className="fixed top-0 z-50 w-full bg-white/50 dark:bg-bodyBG/50 backdrop-blur-xl dark:backdrop-blur-sm">
                {/* <div className="max-w-6xl mx-auto bg-gray-500 flex justify-center"> */}
                <nav className="navbar px-4 md:px-12 flex items-center justify-between">
                    {/* small screen logo */}
                    <div className="flex items-center md:hidden">
                        <Link to="/">
                            <figure>
                                <img
                                    src={logo}
                                    alt="Logo"
                                    className="w-9 h-9 mx-auto"
                                />
                            </figure>
                        </Link>
                    </div>
                    {/* large screen */}
                    <div
                        className="hidden md:flex flex-1 justify-center items-center">
                        <ul className="flex items-center justify-center space-x-24 group font-medium text-black dark:text-grayDarkAlltext">
                            <motion.li
                                variants={eachFadeInAnimation}
                                initial="initial"
                                animate="animate"
                                custom={0}>
                                <NavLink
                                    to="/education-background"
                                    className={({ isActive }) =>
                                        `nav-hover px-2 py-1 transition-all duration-200 rounded ${isActive
                                            ? "gradientBG"
                                            : ""
                                        }`
                                    }
                                >
                                    Education
                                </NavLink>
                            </motion.li>

                            <motion.li
                                variants={eachFadeInAnimation}
                                initial="initial"
                                animate="animate"
                                custom={1}>
                                <NavLink
                                    to="/projects"
                                    className={({ isActive }) =>
                                        `nav-hover px-2 py-1 transition-all duration-200 rounded ${isActive
                                            ? "gradientBG"
                                            : ""
                                        }`
                                    }
                                >
                                    Projects
                                </NavLink>
                            </motion.li>

                            <motion.li
                                variants={eachFadeInAnimation}
                                initial="initial"
                                animate="animate"
                                custom={2} >
                                <Link to="/">
                                    <figure>
                                        <img
                                            src={logo}
                                            alt="Logo"
                                            className="w-12 h-12 mx-auto cursor-pointer"
                                        />
                                    </figure>
                                </Link>
                            </motion.li>

                            <motion.li
                                variants={eachFadeInAnimation}
                                initial="initial"
                                animate="animate"
                                custom={3} >
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        `nav-hover px-2 py-1 transition-all duration-200 rounded ${isActive
                                            ? "gradientBG"
                                            : ""
                                        }`
                                    }
                                >
                                    About
                                </NavLink>
                            </motion.li>

                            <motion.li
                                variants={eachFadeInAnimation}
                                initial="initial"
                                animate="animate"
                                custom={4} >
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        `nav-hover px-2 py-1 transition-all duration-200 rounded ${isActive
                                            ? "gradientBG"
                                            : ""
                                        }`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </motion.li>

                            <motion.li
                                variants={eachFadeInAnimation}
                                initial="initial"
                                animate="animate"
                                custom={5} >
                                <Toggle />
                            </motion.li>
                        </ul>
                    </div>

                    {/* small screen */}
                    <div className="navbar-end md:hidden">
                        <div className="dropdown dropdown-end">
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
                                className="dropdown-content mt-3 p-4 py-6 text-center space-y-5 font-medium text-grayLightProfileText dark:text-grayDarkAlltext dark:bg-navBG backdrop-blur-2xl rounded-box w-52 shadow"
                            >
                                <motion.li
                                    variants={eachFadeInAnimation}
                                    initial="initial"
                                    animate="animate"
                                    custom={0}
                                >
                                    <NavLink
                                        to="/education-background"
                                        className={({ isActive }) =>
                                            `gradientHover ${isActive
                                                ? "gradientBG"
                                                : ""
                                            }`
                                        }
                                    >
                                        Education
                                    </NavLink>
                                </motion.li>

                                <motion.li
                                    variants={eachFadeInAnimation}
                                    initial="initial"
                                    animate="animate"
                                    custom={1}>
                                    <NavLink
                                        to="/projects"
                                        className={({ isActive }) =>
                                            `gradientHover ${isActive
                                                ? "gradientBG"
                                                : ""
                                            }`
                                        }
                                    >
                                        Projects
                                    </NavLink>
                                </motion.li>

                                <motion.li
                                    variants={eachFadeInAnimation}
                                    initial="initial"
                                    animate="animate"
                                    custom={2}>
                                    <NavLink
                                        to="/about"
                                        className={({ isActive }) =>
                                            `gradientHover ${isActive
                                                ? "gradientBG"
                                                : ""
                                            }`
                                        }
                                    >
                                        About
                                    </NavLink>
                                </motion.li>

                                <motion.li
                                    variants={eachFadeInAnimation}
                                    initial="initial"
                                    animate="animate"
                                    custom={3}>
                                    <NavLink
                                        to="/contact"
                                        className={({ isActive }) =>
                                            `gradientHover ${isActive
                                                ? "gradientBG"
                                                : ""
                                            }`
                                        }
                                    >
                                        Contact
                                    </NavLink>
                                </motion.li>
                            </ul>
                        </div>
                        <Toggle />
                    </div>
                </nav>
                {/* </div> */}
            </div>
        </>
    )
}

export default Navbar