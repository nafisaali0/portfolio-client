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

const Projects = () => {

    const [selectedTab, setSelectedTab] = useState(0);//for Tab list    
    const uniqueCategory = useProjectsCategory()
    const filteredProjects = useTabProjects(selectedTab)
    // console.log(filteredProjects)
    const handleTabSelect = (index) => {
        setSelectedTab(index);
    };

    return (

        <>
            <div className="max-w-4xl p-5 mx-auto mt-36 overflow-hidden">
                <h1 className="text-2xl font-bold dark:text-grayDarkAlltext">Projects</h1>
                <Tabs onSelect={(index) => handleTabSelect(index)}>
                    <div className="flex justify-center items-center">
                        <TabList className="cursor-pointer flex gap-9 items-center text-lg font-semibold my-5 text-black dark:text-grayDarkAlltext">
                            <>
                                {
                                    uniqueCategory?.map((eachCategory, index) => (
                                        <Tab key={index} className={`${selectedTab === index ? 'capitalize p-2 border-b-2 outline-none bg-white dark:bg-transparent dark:text-grayDarkAlltext' : ''}`}>{eachCategory}</Tab>
                                    ))
                                }
                            </>
                        </TabList>
                    </div>
                    <div className="font-medium text-sm text-black dark:text-grayDarkAlltext">
                        <TabPanel>
                            <div className="grid grid-cols-1 gap-3 overflow-hidden">
                                {
                                    filteredProjects.map((sortProjects, index) => (
                                        <>
                                            <div key={index} className="flex flex-col w-full">
                                                <div className="flex flex-col gap-5">
                                                    <div className="rounded-lg border border-light-gray/50 p-5 flex flex-col gap-5">
                                                        <div className="relative h-64 overflow-hidden rounded-lg group">
                                                            <figure>
                                                                <img
                                                                    src={sortProjects.details_image}
                                                                    alt="project"
                                                                    className="w-full h-auto object-cover transition-transform duration-[2500ms] ease-in-out group-hover:translate-y-[calc(-100%+16rem)]"
                                                                    style={{ transition: 'transform 8.5s ease-in-out' }}
                                                                />
                                                            </figure>
                                                        </div>

                                                        <div className="flex flex-col">
                                                            <p>{sortProjects.title}</p>
                                                            <p>{sortProjects.description}</p>
                                                            <div className="grid md:grid-cols-3 sm:grid-cols-2 items-center gap-2 mt-5">
                                                                {sortProjects.language?.split(",")?.map((tech, i) => (
                                                                    <div key={i} className="flex items-center justify-center gap-1.5 capitalize">{tech}</div>
                                                                ))}
                                                            </div>
                                                            <div className="flex items-center gap-2 w-full mt-8 max-md:flex-col">
                                                                <Link to={sortProjects.github_link} className="w-1/3 bg-light-gray/10 capitalize text-white flex items-center justify-center gap-2">
                                                                    <RiGlobalLine />
                                                                    <span>Live Link</span>
                                                                </Link>
                                                                <Link to={'sortProjects.live_link'} className="w-1/3 bg-light-gray/10 capitalize text-white flex items-center justify-center gap-2">
                                                                    <SlSocialGithub />
                                                                    <span>Github Link</span>
                                                                </Link>
                                                                <Link to={'sortProjects.live_link'} className="w-1/3 bg-light-gray/10 capitalize text-white flex items-center justify-center gap-2">
                                                                    <RxVideo />
                                                                    <span>Watch Video</span>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col gap-2 rounded-full text-white font-medium text-sm">
                                                        <Link to={'/'}>
                                                            <GrUpdate />
                                                        </Link>
                                                        <Link to={'/'}>
                                                            <TiDelete />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>

                                        </>
                                    ))
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="grid grid-cols-1 gap-12 overflow-hidden">
                                {filteredProjects.map((sortProjects, index) => (
                                    <>
                                        <div className="flex gap-3">
                                            <div
                                                key={index}
                                                className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} w-full items-center gap-6`}
                                            >
                                                {/* Image Section */}
                                                <div className="relative h-64 md:w-1/2 overflow-hidden rounded-lg group">
                                                    <figure>
                                                        <img
                                                            src={sortProjects.details_image}
                                                            alt="project"
                                                            className="w-full h-auto object-cover transition-transform duration-[2500ms] ease-in-out group-hover:translate-y-[calc(-100%+16rem)]"
                                                            style={{ transition: 'transform 8.5s ease-in-out' }}
                                                        />
                                                    </figure>
                                                </div>

                                                {/* Content Section */}
                                                <div className="flex flex-col md:w-1/2 gap-4">
                                                    <p className="text-xl font-semibold">{sortProjects.title}</p>
                                                    <p className="text-gray-300">{sortProjects.description}</p>

                                                    <div className="grid md:grid-cols-3 sm:grid-cols-2 items-center gap-2 mt-5">
                                                        {sortProjects.language?.split(",")?.map((tech, i) => (
                                                            <div key={i} className="flex items-center justify-center gap-1.5 capitalize">
                                                                {tech}
                                                            </div>
                                                        ))}
                                                    </div>

                                                    <div className="flex items-center gap-2 w-full mt-8 max-md:flex-col">
                                                        <Link
                                                            to={sortProjects.github_link}
                                                            className="w-1/3 bg-light-gray/10 capitalize text-white flex items-center justify-center gap-2"
                                                        >
                                                            <RiGlobalLine />
                                                            <span>Live Link</span>
                                                        </Link>
                                                        <Link
                                                            to={sortProjects.live_link}
                                                            className="w-1/3 bg-light-gray/10 capitalize text-white flex items-center justify-center gap-2"
                                                        >
                                                            <SlSocialGithub />
                                                            <span>Github Link</span>
                                                        </Link>
                                                        <Link
                                                            to={sortProjects.live_link}
                                                            className="w-1/3 bg-light-gray/10 capitalize text-white flex items-center justify-center gap-2"
                                                        >
                                                            <RxVideo />
                                                            <span>Watch Video</span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-2 rounded-full text-white font-medium text-sm">
                                                <Link to={'/'}>
                                                    <GrUpdate />
                                                </Link>
                                                <Link to={'/'}>
                                                    <TiDelete />
                                                </Link>
                                            </div>
                                        </div>
                                    </>
                                ))}
                            </div>

                        </TabPanel>
                        <TabPanel></TabPanel>
                    </div>
                </Tabs>
            </div>
        </>
    )
}

export default Projects
