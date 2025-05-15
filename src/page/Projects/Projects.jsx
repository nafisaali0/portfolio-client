import { Tab, TabList, TabPanel, Tabs } from "react-tabs"
// import project2 from "../../../public/Projects/blog.png"
// import useProjects from "../../hooks/useProjects";
import useProjectsCategory from "../../hooks/useProjectsCategory";
import { useState } from "react";

const Projects = () => {

    const [selectedTab, setSelectedTab] = useState(0);//for Tab list
    const handleTabSelect = (index) => {
        setSelectedTab(index);
    };
    const category  = useProjectsCategory()

    return (

        <>
            <div className="max-w-4xl p-5 mx-auto mt-36 overflow-hidden">
                <h1 className="text-2xl font-bold dark:text-grayDarkAlltext">Projects</h1>

                <Tabs onSelect={(index) => handleTabSelect(index)}>
                    <div className="flex justify-center items-center">
                        <TabList className="cursor-pointer flex gap-9 items-center text-lg font-semibold my-5 text-black dark:text-grayDarkAlltext">
                            <>
                                {
                                    category?.map((eachCategory, index) => (
                                        <Tab key={index} className={`${selectedTab === index ? 'p-2 border-b-2 outline-none bg-white dark:bg-transparent dark:text-grayDarkAlltext' : ''}`}>{eachCategory}</Tab>
                                    ))
                                }
                            </>
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
