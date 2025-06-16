import javaScript from "../../../../public/techIcon/javascript-new.svg"
import react from "../../../../public/techIcon/react-new.svg"
import html from "../../../../public/techIcon/html-5.svg"
import css from "../../../../public/techIcon/css3.svg"
import tailwind from "../../../../public/techIcon/tailwind-new.svg"
import express from "../../../../public/techIcon/express-new.svg"
import mongoDB from "../../../../public/techIcon/mongodb.svg"
import figma from "../../../../public/tools/figma.svg"
import vscode from "../../../../public/tools/vs-code.svg"
import { TbBrandVercelFilled } from "react-icons/tb";
import netlify from "../../../../public/tools/netlify.svg"
import github from "../../../../public/tools/github.svg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react"
import Title from "../../../components/Title/Title"
import useAOS from "../../../hooks/useAOS"
import { motion } from "framer-motion";
import eachFadeInAnimation from "../../../Utility/eachFadeInAnimation"

const Skills = () => {

    const frontendSkills = [
        { name: "JavaScript", image: javaScript },
        { name: "React", image: react },
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
    useAOS();

    return (
        <>
            <div className="max-w-4xl p-5 my-16 mx-auto overflow-hidden">
                <Title title="Tech Toolbox" />
                {/* tab */}
                <Tabs onSelect={(index) => handleTabSelect(index)}>
                    <TabList className={" flex gap-5 items-center text-lg font-semibold my-5 text-black dark:text-grayDarkAlltext"}>
                        <Tab
                            data-aos="fade-up"
                            // data-aos-delay="500"
                            className={`${selectedTab === 0 ? 'p-2 border-b-2 outline-none bg-white dark:bg-transparent dark:text-grayDarkAlltext' : ''}`}>Front End</Tab>
                        <Tab
                            data-aos="fade-up"
                            data-aos-delay="500"
                            className={`${selectedTab === 1 ? 'p-2 border-b-2 outline-none bg-white dark:bg-transparent dark:text-grayDarkAlltext' : ''}`}>Back End</Tab>
                        <Tab
                            data-aos="fade-up"
                            // data-aos-delay="500"
                            className={`${selectedTab === 2 ? 'p-2 border-b-2 outline-none bg-white dark:bg-transparent dark:text-grayDarkAlltext' : ''}`}>Tools</Tab>
                    </TabList>
                    <div className="my-5 font-medium text-sm text-black dark:text-grayDarkAlltext">
                        <TabPanel>
                            <div
                                className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                                <>
                                    {frontendSkills.map((skills, index) => (
                                        <motion.div
                                            key={index}
                                            variants={eachFadeInAnimation}
                                            initial="initial"
                                            whileInView="animate"
                                            viewport={
                                                {
                                                    once: true,
                                                }
                                            }
                                            custom={index}
                                            className="flex flex-col items-center justify-center px-3 py-4 md:px-4 md:py-6 rounded-xl border border-grayLightProfileText transition-all ease-in-out group"
                                        >
                                            <img src={skills.image} className="w-8 h-8 transition-transform duration-300 group-hover:-translate-y-1" />
                                            <span className="mt-2 text-center group-hover:bg-gradient-to-r group-hover:from-[#f43f5e] group-hover:via-[#64748B] group-hover:to-[#FB923C] group-hover:text-transparent group-hover:bg-clip-text">{skills.name}</span>
                                        </motion.div>
                                    ))}
                                </>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                                <>
                                    {backendSkills.map((skills, index) => (
                                        <motion.div
                                            key={index}
                                            variants={eachFadeInAnimation}
                                            initial="initial"
                                            whileInView="animate"
                                            viewport={
                                                {
                                                    once: true,
                                                }
                                            }
                                            custom={index}
                                            className="flex flex-col items-center justify-center px-3 py-4 md:px-4 md:py-6 rounded-xl border border-grayLightProfileText transition-all ease-in-out group"
                                        >
                                            <img src={skills.image} className="w-8 h-8 transition-transform duration-300 group-hover:-translate-y-1" />
                                            <span className="mt-2 text-center group-hover:bg-gradient-to-r group-hover:from-[#f43f5e] group-hover:via-[#64748B] group-hover:to-[#FB923C] group-hover:text-transparent group-hover:bg-clip-text">{skills.name}</span>
                                        </motion.div>
                                    ))}
                                </>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                                <>
                                    {tools.map((tool, index) => (
                                        <motion.div
                                            key={index}
                                            variants={eachFadeInAnimation}
                                            initial="initial"
                                            whileInView="animate"
                                            viewport={
                                                {
                                                    once: true,
                                                }
                                            }
                                            custom={index}
                                            className="flex flex-col items-center justify-center px-3 py-4 md:px-4 md:py-6 rounded-xl border border-grayLightProfileText transition-all ease-in-out group"
                                        >
                                            {tool.image ? (
                                                <img src={tool.image} alt={tool.name} className="w-8 h-8 transition-transform duration-300 group-hover:-translate-y-1" />
                                            ) : (
                                                <span className="dark:text-white transition-transform duration-300 group-hover:-translate-y-1">{tool.icon}</span>
                                            )}
                                            <span className="mt-2 group-hover:bg-gradient-to-r group-hover:from-[#f43f5e] group-hover:via-[#64748B] group-hover:to-[#FB923C] group-hover:text-transparent group-hover:bg-clip-text">{tool.name}</span>
                                        </motion.div>
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
