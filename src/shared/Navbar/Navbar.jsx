import logo from "../../../public/logo/logo_red_black-removebg.png"
import Toggle from "../../components/Toggle/Toggle";

const Navbar = () => {

    return (
        <>
            <div className="fixed top-0 w-full z-50 bg-white/30 dark:bg-[#1a1c1f4d] backdrop-blur-xl dark:backdrop-blur-sm">
                <div className="container mx-auto dark:text-white">
                    <nav className="navbar px-4 md:px-12 flex items-center justify-between">
                        <div className="flex items-center md:hidden">
                            <figure>
                                <img
                                    src={logo}
                                    alt="Logo"
                                    className="w-9 h-9 mx-auto"
                                />
                            </figure>
                        </div>
                        <div className="hidden md:flex flex-1 justify-center items-center">
                            <ul className="flex items-center justify-center space-x-16 group font-medium">
                                <li>
                                    <a
                                        href="#articles"
                                        data-v-ebc98991
                                    >
                                        Education
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#about"
                                        data-v-ebc98991
                                    >
                                        Projects
                                    </a>
                                </li>
                                <li>
                                    <figure>
                                        <img
                                            src={logo}
                                            alt="Logo"
                                            className="w-12 h-12 mx-auto"
                                        />
                                    </figure>
                                </li>
                                <li>
                                    <a
                                        href="#portfolio"
                                        data-v-ebc98991
                                    >
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#blog"
                                        data-v-ebc98991
                                    >
                                        Contact
                                    </a>
                                </li>
                                <li className="">
                                    <Toggle></Toggle>
                                </li>
                            </ul>
                        </div>

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
                                    className="dropdown-content mt-3 p-4 text-center space-y-3 font-medium text-[#64748B] dark:text-[#9F9F9F] bg-base-100 dark:bg-black rounded-box w-52 dark:hover:text-white shadow"
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
                            <Toggle></Toggle>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Navbar