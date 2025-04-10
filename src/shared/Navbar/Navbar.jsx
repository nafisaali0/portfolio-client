import { useContext } from "react";
import logo_light from "../../../public/logo/logo_4-removeb.png"
import logo_dark from "../../../public/logo/logo_white-removebg.png"
import Toggle from "../../components/Toggle/Toggle";
import './navbar.css'
import { ThemeContext } from "../../Providers/ThemeProvider";
const Navbar = () => {

    const { darkMode } = useContext(ThemeContext)

    return (
        <>
            <div className="fixed top-0 w-full z-50">
                <div className="container mx-auto dark:text-white">
                    <nav className="navbar px-4 md:px-12 flex items-center justify-between">
                        <div className="flex items-center lg:hidden">
                            <>
                                {
                                    darkMode ?
                                        <figure>
                                            <img
                                                src={logo_light}
                                                alt="Logo"
                                                className="w-12 h-12 mx-auto"
                                            />
                                        </figure>
                                        :
                                        <figure>
                                            <img
                                                src={logo_dark}
                                                alt="Logo"
                                                className="w-12 h-12 mx-auto"
                                            />
                                        </figure>
                                }
                            </>
                        </div>
                        <div className="hidden md:flex flex-1 justify-center items-center">
                            <ul className="flex items-center justify-center space-x-16 group">
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
                                    <>
                                        {
                                            darkMode ?
                                                <a
                                                    href="/"
                                                    data-v-ebc98991
                                                >
                                                    <figure>
                                                        <img
                                                            src={logo_dark}
                                                            alt="Logo"
                                                            className="w-12 h-12 mx-auto"
                                                        />
                                                    </figure>
                                                </a>
                                                :
                                                <a
                                                    href="/"
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
                                        }
                                    </>

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
                            <Toggle></Toggle>
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