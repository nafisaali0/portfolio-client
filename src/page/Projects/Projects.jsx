import { Tab, TabList, TabPanel, Tabs } from "react-tabs"
import useProjectsCategory from "../../hooks/useProjectsCategory";
import { useState } from "react";
import useTabProjects from "../../hooks/useTabProjects";
import { Link } from "react-router-dom";
import { RiGlobalLine } from "react-icons/ri";
import { SlSocialGithub } from "react-icons/sl";
import { RxVideo } from "react-icons/rx";
import { GrUpdate } from "react-icons/gr";
import { TiDelete } from "react-icons/ti";
import useAdminLocalStorage from "../../hooks/useAdminLocalStorage";
import Title from "../../components/Title/Title";
import useAOS from "../../hooks/useAOS";

const Projects = () => {

    const isAdmin = useAdminLocalStorage();
    const [selectedTab, setSelectedTab] = useState(0);//for Tab list    
    const uniqueCategory = useProjectsCategory()
    const filteredProjects = useTabProjects(selectedTab)
    const handleTabSelect = (index) => {
        setSelectedTab(index);
    };
    useAOS();
    return (

        <>
            <div className="max-w-4xl p-5 mx-auto mt-36 overflow-hidden">
                <Title title="Projects" />
                <Tabs onSelect={(index) => handleTabSelect(index)}>
                    <div className="flex justify-center items-center mb-10">
                        <TabList className="cursor-pointer flex gap-8 md:gap-9 items-center capitalize md:text-lg text-sm font-semibold my-5 text-black dark:text-grayDarkAlltext">
                            <>
                                {
                                    uniqueCategory?.map((eachCategory, index) => (
                                        <Tab
                                            key={index}
                                            data-aos="fade-right"
                                            data-aos-offset="300"
                                            data-aos-delay="600"
                                            className={`${selectedTab === index ? 'p-2 border-b-2 outline-none bg-white dark:bg-transparent dark:text-grayDarkAlltext' : ''}`}>{eachCategory}</Tab>
                                    ))
                                }
                            </>
                        </TabList>
                    </div>
                    <div className="">
                        <TabPanel>
                            <div className="grid grid-cols-1 gap-5 overflow-hidden">
                                {filteredProjects?.map((sortProjects, index) => (
                                    <>
                                        <div
                                            data-aos={index % 2 !== 0 ? 'fade-right' : 'fade-left'}
                                            data-aos-offset="300"
                                            className={`w-full min-h-[500px] flex flex-col md:flex-row justify-center items-center gap-6 p-6 dark:bg-white/10 rounded-3xl md:border md:border-grayDarkAlltext ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                                            style={{
                                                backgroundImage:
                                                    'radial-gradient(80% 6% at 50% 103%, rgba(111, 56, 252, 0.267), transparent)',

                                            }}
                                        >
                                            {/* icons - small */}
                                            <div className="md:hidden flex items-center justify-end gap-3 w-full mt-3 max-md:flex-wrap">
                                                <Link
                                                    to={sortProjects.github_link}
                                                    className="w-12 h-12 border border-grayDarkProfileText dark:border-none bg-black/10 dark:bg-white dark:text-black rounded-full flex items-center justify-center hover:scale-110 transition text-2xl"
                                                >
                                                    <SlSocialGithub />
                                                </Link>
                                                <Link
                                                    to={sortProjects.live_link}
                                                    className="w-12 h-12 border border-grayDarkProfileText dark:border-none bg-black/10 dark:bg-white dark:text-black rounded-full flex items-center justify-center hover:scale-110 transition text-2xl"
                                                >
                                                    <RiGlobalLine />
                                                </Link>
                                                <Link
                                                    to={sortProjects.live_link}
                                                    className="w-12 h-12 border border-grayDarkProfileText dark:border-none bg-black/10 dark:bg-white dark:text-black rounded-full flex items-center justify-center hover:scale-110 transition text-2xl"
                                                >
                                                    <RxVideo />
                                                </Link>
                                                {
                                                    isAdmin ?

                                                        <>
                                                            <Link
                                                                to={sortProjects.live_link}
                                                                className="w-12 h-12 border border-grayDarkProfileText dark:border-none bg-black/10 dark:bg-white dark:text-black rounded-full flex items-center justify-center hover:scale-110 transition text-2xl"
                                                            >
                                                                <GrUpdate />
                                                            </Link>
                                                            <Link
                                                                to={sortProjects.live_link}
                                                                className="w-12 h-12 border border-grayDarkProfileText dark:border-none bg-black/10  dark:bg-white dark:text-black rounded-full flex items-center justify-center hover:scale-110 transition text-2xl"
                                                            >
                                                                <TiDelete />
                                                            </Link>
                                                        </>
                                                        : ""
                                                }

                                            </div>
                                            <div className="flex-1 max-h-[400px] rounded-2xl overflow-hidden group relative">
                                                <img
                                                    src={sortProjects.details_image}
                                                    alt="eachProject"
                                                    className="w-full h-auto min-h-full object-cover object-top transition-transform duration-[8500ms] ease-in-out group-hover:translate-y-[-85%]"
                                                />
                                            </div>

                                            <div className="flex-1 flex flex-col gap-5">
                                                {/*icons-large*/}
                                                <div className={`hidden md:flex items-center ${index % 2 !== 0 ? 'justify-start' : 'justify-end'} flex-wrap gap-3 w-full mt-3`}>
                                                    <Link
                                                        to={sortProjects.github_link}
                                                        className="w-12 h-12 border border-grayDarkProfileText dark:border-none bg-black/10 dark:bg-white dark:text-black rounded-full flex items-center justify-center hover:scale-110 transition text-2xl"
                                                    >
                                                        <SlSocialGithub />
                                                    </Link>
                                                    <Link
                                                        to={sortProjects.live_link}
                                                        className="w-12 h-12 border border-grayDarkProfileText dark:border-none bg-black/10 dark:bg-white dark:text-black rounded-full flex items-center justify-center hover:scale-110 transition text-2xl"
                                                    >
                                                        <RiGlobalLine />
                                                    </Link>
                                                    <Link
                                                        to={sortProjects.live_link}
                                                        className="w-12 h-12 border border-grayDarkProfileText dark:border-none bg-black/10 dark:bg-white dark:text-black rounded-full flex items-center justify-center hover:scale-110 transition text-2xl"
                                                    >
                                                        <RxVideo />
                                                    </Link>
                                                    {
                                                        isAdmin ?

                                                            <>
                                                                <Link
                                                                    to={sortProjects.live_link}
                                                                    className="w-12 h-12 border border-grayDarkProfileText dark:border-none bg-black/10 dark:bg-white dark:text-black rounded-full flex items-center justify-center hover:scale-110 transition text-2xl"
                                                                >
                                                                    <GrUpdate />
                                                                </Link>
                                                                <Link
                                                                    to={sortProjects.live_link}
                                                                    className="w-12 h-12 border border-grayDarkProfileText dark:border-none bg-black/10  dark:bg-white dark:text-black rounded-full flex items-center justify-center hover:scale-110 transition text-2xl"
                                                                >
                                                                    <TiDelete />
                                                                </Link>
                                                            </>
                                                            : ""
                                                    }
                                                </div>
                                                <p className="text-4xl font-semibold text-black dark:text-white mt-4 md:mt-10">{sortProjects.title}</p>
                                                <p className="text-xs text-textSmalllight dark:text-slate-100 my-2">{sortProjects.description}</p>

                                                <ul className="flex flex-wrap gap-2 my-3 w-full">
                                                    {sortProjects.language?.split(",")?.map((lang) => (
                                                        <li
                                                            key={index}
                                                            className="rounded-lg px-3 py-1 text-sm font-medium text-textSmalllight dark:text-slate-200 backdrop-blur-md bg-black/10 dark:bg-white/10 transition-transform duration-300 hover:-translate-y-1"
                                                        >
                                                            {lang}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div >
                                    </>
                                ))}
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="grid grid-cols-1 gap-5 overflow-hidden">
                                {filteredProjects?.map((sortProjects, index) => (
                                    <>
                                        <div className={`w-full min-h-[500px] flex flex-col md:flex-row justify-center items-center gap-6 p-6 dark:bg-white/10 rounded-3xl md:border md:border-grayDarkAlltext ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                                            style={{
                                                backgroundImage:
                                                    'radial-gradient(80% 6% at 50% 103%, rgba(111, 56, 252, 0.267), transparent)',

                                            }}
                                        >
                                            {/* icons - small */}
                                            <div className="md:hidden flex items-center justify-end gap-3 w-full mt-3 max-md:flex-wrap">
                                                <Link
                                                    to={sortProjects.github_link}
                                                    className="w-12 h-12 border border-grayDarkProfileText dark:border-none bg-black/10 dark:bg-white dark:text-black rounded-full flex items-center justify-center hover:scale-110 transition text-2xl"
                                                >
                                                    <SlSocialGithub />
                                                </Link>
                                                <Link
                                                    to={sortProjects.live_link}
                                                    className="w-12 h-12 border border-grayDarkProfileText dark:border-none bg-black/10 dark:bg-white dark:text-black rounded-full flex items-center justify-center hover:scale-110 transition text-2xl"
                                                >
                                                    <RiGlobalLine />
                                                </Link>
                                                <Link
                                                    to={sortProjects.live_link}
                                                    className="w-12 h-12 border border-grayDarkProfileText dark:border-none bg-black/10 dark:bg-white dark:text-black rounded-full flex items-center justify-center hover:scale-110 transition text-2xl"
                                                >
                                                    <RxVideo />
                                                </Link>
                                                {
                                                    isAdmin ?

                                                        <>
                                                            <Link
                                                                to={sortProjects.live_link}
                                                                className="w-12 h-12 border border-grayDarkProfileText dark:border-none bg-black/10 dark:bg-white dark:text-black rounded-full flex items-center justify-center hover:scale-110 transition text-2xl"
                                                            >
                                                                <GrUpdate />
                                                            </Link>
                                                            <Link
                                                                to={sortProjects.live_link}
                                                                className="w-12 h-12 border border-grayDarkProfileText dark:border-none bg-black/10  dark:bg-white dark:text-black rounded-full flex items-center justify-center hover:scale-110 transition text-2xl"
                                                            >
                                                                <TiDelete />
                                                            </Link>
                                                        </>
                                                        : ""
                                                }

                                            </div>
                                            <div className="flex-1 max-h-[400px] rounded-2xl overflow-hidden group relative">
                                                <img
                                                    src={sortProjects.details_image}
                                                    alt="eachProject"
                                                    className="w-full h-auto min-h-full object-cover object-top transition-transform duration-[8500ms] ease-in-out group-hover:translate-y-[-85%]"
                                                />
                                            </div>

                                            <div className="flex-1 flex flex-col gap-5">
                                                {/*icons-large*/}
                                                <div className={`hidden md:flex items-center ${index % 2 !== 0 ? 'justify-start' : 'justify-end'} flex-wrap gap-3 w-full mt-3`}>
                                                    <Link
                                                        to={sortProjects.github_link}
                                                        className="w-12 h-12 border border-grayDarkProfileText dark:border-none bg-black/10 dark:bg-white dark:text-black rounded-full flex items-center justify-center hover:scale-110 transition text-2xl"
                                                    >
                                                        <SlSocialGithub />
                                                    </Link>
                                                    <Link
                                                        to={sortProjects.live_link}
                                                        className="w-12 h-12 border border-grayDarkProfileText dark:border-none bg-black/10 dark:bg-white dark:text-black rounded-full flex items-center justify-center hover:scale-110 transition text-2xl"
                                                    >
                                                        <RiGlobalLine />
                                                    </Link>
                                                    <Link
                                                        to={sortProjects.live_link}
                                                        className="w-12 h-12 border border-grayDarkProfileText dark:border-none bg-black/10 dark:bg-white dark:text-black rounded-full flex items-center justify-center hover:scale-110 transition text-2xl"
                                                    >
                                                        <RxVideo />
                                                    </Link>
                                                    {
                                                        isAdmin ?

                                                            <>
                                                                <Link
                                                                    to={sortProjects.live_link}
                                                                    className="w-12 h-12 border border-grayDarkProfileText dark:border-none bg-black/10 dark:bg-white dark:text-black rounded-full flex items-center justify-center hover:scale-110 transition text-2xl"
                                                                >
                                                                    <GrUpdate />
                                                                </Link>
                                                                <Link
                                                                    to={sortProjects.live_link}
                                                                    className="w-12 h-12 border border-grayDarkProfileText dark:border-none bg-black/10  dark:bg-white dark:text-black rounded-full flex items-center justify-center hover:scale-110 transition text-2xl"
                                                                >
                                                                    <TiDelete />
                                                                </Link>
                                                            </>
                                                            : ""
                                                    }
                                                </div>
                                                <p className="text-4xl font-semibold text-black dark:text-white mt-4 md:mt-10">{sortProjects.title}</p>
                                                <p className="text-xs text-textSmalllight dark:text-slate-100 my-2">{sortProjects.description}</p>

                                                <ul className="flex flex-wrap gap-2 my-3 w-full">
                                                    {sortProjects.language?.split(",")?.map((lang) => (
                                                        <li
                                                            key={lang}
                                                            className="rounded-lg px-3 py-1 text-sm font-medium text-textSmalllight dark:text-slate-200 backdrop-blur-md bg-black/10 dark:bg-white/10 transition-transform duration-300 hover:-translate-y-1"
                                                        >
                                                            {lang}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div >
                                    </>
                                ))}
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="grid grid-cols-1 gap-5 overflow-hidden">
                                {filteredProjects?.map((sortProjects, index) => (
                                    <>
                                        <div className={`w-full min-h-[500px] flex flex-col md:flex-row justify-center items-center gap-6 p-6 dark:bg-white/10 rounded-3xl md:border md:border-grayDarkAlltext ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                                            style={{
                                                backgroundImage:
                                                    'radial-gradient(80% 6% at 50% 103%, rgba(111, 56, 252, 0.267), transparent)',

                                            }}
                                        >
                                            {/* icons - small */}
                                            <div className="md:hidden flex items-center justify-end gap-3 w-full mt-3 max-md:flex-wrap">
                                                <Link
                                                    to={sortProjects.github_link}
                                                    className="w-12 h-12 border border-grayDarkProfileText dark:border-none bg-black/10 dark:bg-white dark:text-black rounded-full flex items-center justify-center hover:scale-110 transition text-2xl"
                                                >
                                                    <SlSocialGithub />
                                                </Link>
                                                <Link
                                                    to={sortProjects.live_link}
                                                    className="w-12 h-12 border border-grayDarkProfileText dark:border-none bg-black/10 dark:bg-white dark:text-black rounded-full flex items-center justify-center hover:scale-110 transition text-2xl"
                                                >
                                                    <RiGlobalLine />
                                                </Link>
                                                <Link
                                                    to={sortProjects.live_link}
                                                    className="w-12 h-12 border border-grayDarkProfileText dark:border-none bg-black/10 dark:bg-white dark:text-black rounded-full flex items-center justify-center hover:scale-110 transition text-2xl"
                                                >
                                                    <RxVideo />
                                                </Link>
                                                {
                                                    isAdmin ?

                                                        <>
                                                            <Link
                                                                to={sortProjects.live_link}
                                                                className="w-12 h-12 border border-grayDarkProfileText dark:border-none bg-black/10 dark:bg-white dark:text-black rounded-full flex items-center justify-center hover:scale-110 transition text-2xl"
                                                            >
                                                                <GrUpdate />
                                                            </Link>
                                                            <Link
                                                                to={sortProjects.live_link}
                                                                className="w-12 h-12 border border-grayDarkProfileText dark:border-none bg-black/10  dark:bg-white dark:text-black rounded-full flex items-center justify-center hover:scale-110 transition text-2xl"
                                                            >
                                                                <TiDelete />
                                                            </Link>
                                                        </>
                                                        : ""
                                                }

                                            </div>
                                            <div className="flex-1 max-h-[400px] rounded-2xl overflow-hidden group relative">
                                                <img
                                                    src={sortProjects.details_image}
                                                    alt="eachProject"
                                                    className="w-full h-auto min-h-full object-cover object-top transition-transform duration-[8500ms] ease-in-out group-hover:translate-y-[-85%]"
                                                />
                                            </div>

                                            <div className="flex-1 flex flex-col gap-5">
                                                {/*icons-large*/}
                                                <div className={`hidden md:flex items-center ${index % 2 !== 0 ? 'justify-start' : 'justify-end'} flex-wrap gap-3 w-full mt-3`}>
                                                    <Link
                                                        to={sortProjects.github_link}
                                                        className="w-12 h-12 border border-grayDarkProfileText dark:border-none bg-black/10 dark:bg-white dark:text-black rounded-full flex items-center justify-center hover:scale-110 transition text-2xl"
                                                    >
                                                        <SlSocialGithub />
                                                    </Link>
                                                    <Link
                                                        to={sortProjects.live_link}
                                                        className="w-12 h-12 border border-grayDarkProfileText dark:border-none bg-black/10 dark:bg-white dark:text-black rounded-full flex items-center justify-center hover:scale-110 transition text-2xl"
                                                    >
                                                        <RiGlobalLine />
                                                    </Link>
                                                    <Link
                                                        to={sortProjects.live_link}
                                                        className="w-12 h-12 border border-grayDarkProfileText dark:border-none bg-black/10 dark:bg-white dark:text-black rounded-full flex items-center justify-center hover:scale-110 transition text-2xl"
                                                    >
                                                        <RxVideo />
                                                    </Link>
                                                    {
                                                        isAdmin ?

                                                            <>
                                                                <Link
                                                                    to={sortProjects.live_link}
                                                                    className="w-12 h-12 border border-grayDarkProfileText dark:border-none bg-black/10 dark:bg-white dark:text-black rounded-full flex items-center justify-center hover:scale-110 transition text-2xl"
                                                                >
                                                                    <GrUpdate />
                                                                </Link>
                                                                <Link
                                                                    to={sortProjects.live_link}
                                                                    className="w-12 h-12 border border-grayDarkProfileText dark:border-none bg-black/10  dark:bg-white dark:text-black rounded-full flex items-center justify-center hover:scale-110 transition text-2xl"
                                                                >
                                                                    <TiDelete />
                                                                </Link>
                                                            </>
                                                            : ""
                                                    }
                                                </div>
                                                <p className="text-4xl font-semibold text-black dark:text-white mt-4 md:mt-10">{sortProjects.title}</p>
                                                <p className="text-xs text-textSmalllight dark:text-slate-100 my-2">{sortProjects.description}</p>

                                                <ul className="flex flex-wrap gap-2 my-3 w-full">
                                                    {sortProjects.language?.split(",")?.map((lang) => (
                                                        <li
                                                            key={lang}
                                                            className="rounded-lg px-3 py-1 text-sm font-medium text-textSmalllight dark:text-slate-200 backdrop-blur-md bg-black/10 dark:bg-white/10 transition-transform duration-300 hover:-translate-y-1"
                                                        >
                                                            {lang}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div >
                                    </>
                                ))}
                            </div>
                        </TabPanel>
                    </div>
                </Tabs >
            </div >
        </>
    )
}

export default Projects
