import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs"
// import project2 from "../../../public/Projects/blog.png"
import useProjects from "../../hooks/useProjects";

const Projects = () => {

    const [selectedTab, setSelectedTab] = useState(0);//for Tab list
    const handleTabSelect = (index) => {
        setSelectedTab(index);
    };
    const [fetchProjects] = useProjects();
    console.log(fetchProjects)
    
    return (

        <>
            {/* <div className="max-w-3xl p-5 pl-10 mx-auto mt-36 overflow-hidden">
                <h1 className="text-2xl font-bold dark:text-grayDarkAlltext">Projects</h1>

                <Tabs onSelect={(index) => handleTabSelect(index)}>
                    <div className="flex justify-center items-center">
                        <TabList className={"cursor-pointer flex gap-9 items-center text-lg font-semibold my-5 text-black dark:text-grayDarkAlltext"}>
                            <Tab className={`${selectedTab === 0 ? 'p-2 border-b-2 outline-none bg-white dark:bg-transparent dark:text-grayDarkAlltext' : ''}`}>All</Tab>
                            <Tab className={`${selectedTab === 1 ? 'p-2 border-b-2 outline-none bg-white dark:bg-transparent dark:text-grayDarkAlltext' : ''}`}>Job Project</Tab>
                            <Tab className={`${selectedTab === 2 ? 'p-2 border-b-2 outline-none bg-white dark:bg-transparent dark:text-grayDarkAlltext' : ''}`}>Full Stack</Tab>
                            <Tab className={`${selectedTab === 3 ? 'p-2 border-b-2 outline-none bg-white dark:bg-transparent dark:text-grayDarkAlltext' : ''}`}>Static</Tab>
                        </TabList>
                    </div>
                    <div className="font-medium text-sm text-black dark:text-grayDarkAlltext">
                        <TabPanel>
                            <div className="grid grid-cols-2 gap-3">
                                <div
                                    className="h-[500px] w-full bg-center bg-no-repeat bg-contain rounded-lg"
                                    style={{ backgroundImage: `url(${project2})` }}
                                ></div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                        </TabPanel>
                        <TabPanel>
                        </TabPanel>
                    </div>
                </Tabs>
            </div> */}


            {/* try new */}

            <div className="max-w-3xl p-5 pl-10 mx-auto mt-36 overflow-hidden">
                <h1 className="text-2xl font-bold dark:text-grayDarkAlltext">Projects</h1>

                <Tabs onSelect={(index) => handleTabSelect(index)}>
                    <div className="flex justify-center items-center">
                        <TabList className="cursor-pointer flex gap-9 items-center text-lg font-semibold my-5 text-black dark:text-grayDarkAlltext">
                            <Tab className={`${selectedTab === 0 ? 'p-2 border-b-2 outline-none bg-white dark:bg-transparent dark:text-grayDarkAlltext' : ''}`}>All</Tab>
                            <Tab className={`${selectedTab === 1 ? 'p-2 border-b-2 outline-none bg-white dark:bg-transparent dark:text-grayDarkAlltext' : ''}`}>Job Project</Tab>
                            <Tab className={`${selectedTab === 2 ? 'p-2 border-b-2 outline-none bg-white dark:bg-transparent dark:text-grayDarkAlltext' : ''}`}>Full Stack</Tab>
                            <Tab className={`${selectedTab === 3 ? 'p-2 border-b-2 outline-none bg-white dark:bg-transparent dark:text-grayDarkAlltext' : ''}`}>Static</Tab>
                        </TabList>
                    </div>

                    <div className="font-medium text-sm text-black dark:text-grayDarkAlltext">
                        <TabPanel>                           
                        </TabPanel>
                        <TabPanel></TabPanel>
                        <TabPanel></TabPanel>
                    </div>
                </Tabs>
            </div>

        </>
    )
}

export default Projects
