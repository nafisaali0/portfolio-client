// import { useState } from "react";
// import { Tab, TabList, TabPanel, Tabs } from "react-tabs"

const Projects = () => {

    // const [selectedTab, setSelectedTab] = useState(0);//for Tab list
    // const handleTabSelect = (index) => {
    //     setSelectedTab(index);
    // };

    return (

        <>
            <div className="max-w-3xl p-5 pl-10 mx-auto mt-36 overflow-hidden">
                <h1 className="text-2xl font-bold dark:text-grayDarkAlltext">Projects</h1>


                {/* <Tabs onSelect={(index) => handleTabSelect(index)}>
                    <TabList className={"cursor-pointer flex gap-5 items-center text-lg font-semibold my-5 text-black dark:text-grayDarkAlltext"}>
                        <Tab className={`${selectedTab === 0 ? 'p-2 border-b-2 outline-none bg-white dark:bg-transparent dark:text-grayDarkAlltext' : ''}`}>Front End</Tab>
                        <Tab className={`${selectedTab === 1 ? 'p-2 border-b-2 outline-none bg-white dark:bg-transparent dark:text-grayDarkAlltext' : ''}`}>Back End</Tab>
                        <Tab className={`${selectedTab === 2 ? 'p-2 border-b-2 outline-none bg-white dark:bg-transparent dark:text-grayDarkAlltext' : ''}`}>Tools</Tab>
                    </TabList>
                    <div className="my-5 font-medium text-sm text-black dark:text-grayDarkAlltext">
                        <TabPanel>
                            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                                <>
                                    {frontendSkills.map((skills, index) => (
                                        <div
                                            key={index}
                                            className="flex flex-col items-center justify-center px-3 py-4 md:px-4 md:py-6 rounded-xl border border-grayLightProfileText transition-all ease-in-out group"
                                        >
                                            <img src={skills.image} className="w-8 h-8 transition-transform duration-300 group-hover:-translate-y-1" />
                                            <span className="mt-2 text-center group-hover:bg-gradient-to-r group-hover:from-[#f43f5e] group-hover:via-[#64748B] group-hover:to-[#FB923C] group-hover:text-transparent group-hover:bg-clip-text">{skills.name}</span>
                                        </div>
                                    ))}
                                </>
                            </div>
                        </TabPanel>
                        <TabPanel>
                        </TabPanel>
                        <TabPanel>
                        </TabPanel>
                    </div>
                </Tabs> */}

            </div>

            <div className="tabs tabs-box">
                <input type="radio" name="my_tabs_1" className="tab" aria-label="Tab 1" />
                <input type="radio" name="my_tabs_2" className="tab" aria-label="Tab 2" defaultChecked />
                <input type="radio" name="my_tabs_3" className="tab" aria-label="Tab 3" />
            </div>
        </>
    )
}

export default Projects
