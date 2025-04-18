import { Link, NavLink } from "react-router-dom";
import logo from "../../../public/logo/logo_red_black-removebg.png"
import Toggle from "../../components/Toggle/Toggle";
import './navStyle.css'
const Navbar = () => {

    return (
        <>
            <div className="fixed top-0 w-full z-50 bg-white/30 dark:bg-[#1a1c1f4d] backdrop-blur-xl dark:backdrop-blur-sm">
                <div className="container mx-auto dark:text-white">
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
                        <div className="hidden md:flex flex-1 justify-center items-center">
                            <ul className="flex items-center justify-center space-x-16 group font-medium text-black dark:text-white">
                                <li>
                                    <NavLink
                                        to="/education"
                                        className={({ isActive }) =>
                                            `nav-hover px-2 py-1 transition-all duration-200 rounded ${isActive
                                                ? "bg-gradient-to-r from-[#f43f5e] via-[#64748B] to-[#FB923C] text-transparent bg-clip-text"
                                                : ""
                                            }`
                                        }
                                    >
                                        Education
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink
                                        to="/projects"
                                        className={({ isActive }) =>
                                            `nav-hover px-2 py-1 transition-all duration-200 rounded ${isActive
                                                ? "bg-gradient-to-r from-[#f43f5e] via-[#64748B] to-[#FB923C] text-transparent bg-clip-text"
                                                : ""
                                            }`
                                        }
                                    >
                                        Projects
                                    </NavLink>
                                </li>

                                {/* Logo link – no hover or active styling */}
                                <li>
                                    <Link to="/">
                                        <figure>
                                            <img
                                                src={logo}
                                                alt="Logo"
                                                className="w-12 h-12 mx-auto cursor-pointer"
                                            />
                                        </figure>
                                    </Link>
                                </li>

                                <li>
                                    <NavLink
                                        to="/about"
                                        className={({ isActive }) =>
                                            `nav-hover px-2 py-1 transition-all duration-200 rounded ${isActive
                                                ? "bg-gradient-to-r from-[#f43f5e] via-[#64748B] to-[#FB923C] text-transparent bg-clip-text"
                                                : ""
                                            }`
                                        }
                                    >
                                        About
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink
                                        to="/contact"
                                        className={({ isActive }) =>
                                            `nav-hover px-2 py-1 transition-all duration-200 rounded ${isActive
                                                ? "bg-gradient-to-r from-[#f43f5e] via-[#64748B] to-[#FB923C] text-transparent bg-clip-text"
                                                : ""
                                            }`
                                        }
                                    >
                                        Contact
                                    </NavLink>
                                </li>

                                <li>
                                    <Toggle />
                                </li>
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
                                    className="dropdown-content mt-3 p-4 text-center space-y-3 font-medium text-[#64748B] dark:text-[#9F9F9F] bg-base-100 dark:bg-black rounded-box w-52 shadow"
                                >
                                    <li>
                                        <Link to="/education">
                                            Education
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/projects">
                                            Projects
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/about">
                                            About
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/contact">
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <Toggle></Toggle>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Navbar