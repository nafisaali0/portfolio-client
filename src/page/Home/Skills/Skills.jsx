import javaScript from "../../../../public/techIcon/javascript-new.svg"
import react from "../../../../public/techIcon/react-new.svg"
import html from "../../../../public/techIcon/html-5.svg"
import css from "../../../../public/techIcon/css3.svg"
import tailwind from "../../../../public/techIcon/tailwind-new.svg"
import express from "../../../../public/techIcon/express-new.svg"
import mongoDB from "../../../../public/techIcon/mongodb.svg"
import figma from "../../../../public/tools/figma.svg"
import vscode from "../../../../public/tools/vs-code.svg"
// import vercel from "../../../../public/tools/vercel.svg"
import { TbBrandVercelFilled } from "react-icons/tb";
import netlify from "../../../../public/tools/netlify.svg"
import github from "../../../../public/tools/github.svg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react"

const Skills = () => {

    const frontendSkills = [
        { name: "JavaScript", image: javaScript },
        { name: "React.js", image: react },
        { name: "HTML", image: html },
        { name: "CSS", image: css },
        { name: "Tailwind", image: tailwind },
    ];
    const backendSkills = [
        { name: "Express JS", image: express },
        { name: "MongoDB", image: mongoDB },
    ];
    const tools = [
        { name: "Figma", image: figma },
        { name: "VS Code", image: vscode },
        { name: "Vercel", icon: <TbBrandVercelFilled className="w-8 h-8" /> },
        { name: "Netlify", image: netlify },
        { name: "Github", image: github },
    ];
    const [selectedTab, setSelectedTab] = useState(0);//for Tab list
    const handleTabSelect = (index) => {
        setSelectedTab(index);
    };
    return (
        <>
            <div className="py-20 px-10">
                <h2 className="text-2xl font-bold uppercase mb-6">Tech   Arsenal</h2>
                {/* tab */}
                <Tabs onSelect={(index) => handleTabSelect(index)}>
                    <TabList className={"cursor-pointer flex gap-5 items-center text-2xl font-semibold my-5 text-black dark:text-white"}>
                        <Tab className={`${selectedTab === 0 ? 'p-2 border-b-2 outline-none bg-white dark:bg-transparent dark:text-white' : ''}`}>FrontEnd</Tab>
                        <Tab className={`${selectedTab === 1 ? 'p-2 border-b-2 outline-none bg-white dark:bg-transparent dark:text-white' : ''}`}>Backend</Tab>
                        <Tab className={`${selectedTab === 2 ? 'p-2 border-b-2 outline-none bg-white dark:bg-transparent dark:text-white' : ''}`}>Tools</Tab>
                    </TabList>

                    <div className="my-5 font-medium">
                        <TabPanel>
                            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                                <>
                                    {frontendSkills.map((skills, index) => (
                                        <div
                                            key={index}
                                            className="flex flex-col items-center justify-center px-4 py-6 border border-[#64748B] rounded-xl"
                                        >
                                            <img src={skills.image} className="w-8 h-8" />
                                            <span className="mt-2 text-sm dark:text-[#9F9F9F]">{skills.name}</span>
                                        </div>
                                    ))}
                                </>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                                <>
                                    {backendSkills.map((skills, index) => (
                                        <div
                                            key={index}
                                            className="flex flex-col items-center justify-center px-4 py-6 border border-gray-100 rounded-xl"
                                        >
                                            <img src={skills.image} className="w-8 h-8" />
                                            <span className="mt-2 text-sm dark:text-[#9F9F9F]">{skills.name}</span>
                                        </div>
                                    ))}
                                </>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                                <>
                                    {tools.map((tool, index) => (
                                        <div
                                            key={index}
                                            className="flex flex-col items-center justify-center px-4 py-6 border border-gray-100 rounded-xl"
                                        >
                                            {tool.image ? (
                                                <img src={tool.image} alt={tool.name} className="w-8 h-8" />
                                            ) : (
                                                tool.icon
                                            )}
                                            <span className="mt-2 text-sm dark:text-[#9F9F9F]">{tool.name}</span>
                                        </div>
                                    ))}
                                </>
                            </div>
                        </TabPanel>
                    </div>
                </Tabs>
            </div>
        </>
    )
}

export default Skills
