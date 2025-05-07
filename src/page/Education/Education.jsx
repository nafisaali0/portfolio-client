import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import certificate_one from "../../../public/education/programming_hero_certificate.jpg"
const Education = () => {

    const uniEdu = [
        { courseName: "Bachelor of Technology in Computer Science Engineering(CSE)" },
        { uName: "University of Information Technology and Sciences(UITS)" },
        { year: "2020 - 2023" },
    ];

    const [selectedTab, setSelectedTab] = useState(0);//for Tab list
    const handleTabSelect = (index) => {
        setSelectedTab(index);
    };

    return (
        <>
            <div className="max-w-3xl p-5 pl-10 mx-auto mt-36 overflow-hidden">
                <h1 className="text-2xl font-bold dark:text-grayDarkAlltext">Education Background</h1>

                <Tabs onSelect={(index) => handleTabSelect(index)}>
                    <TabList className={"cursor-pointer flex gap-5 items-center text-lg font-semibold my-5 text-black dark:text-grayDarkAlltext"}>
                        <Tab className={`${selectedTab === 0 ? 'p-2 border-b-2 outline-none bg-white dark:bg-transparent dark:text-grayDarkAlltext' : ''}`}>Academic</Tab>
                        <Tab className={`${selectedTab === 1 ? 'p-2 border-b-2 outline-none bg-white dark:bg-transparent dark:text-grayDarkAlltext' : ''}`}>Cource's Certificates</Tab>
                        {/* <Tab className={`${selectedTab === 2 ? 'p-2 border-b-2 outline-none bg-white dark:bg-transparent dark:text-grayDarkAlltext' : ''}`}>Tools</Tab> */}
                    </TabList>
                    <div className="my-8 text-black dark:text-grayDarkAlltext">
                        <TabPanel>

                            {uniEdu.map((uniBackground, index) => (
                                <>
                                    <div className="flex" key={index}>
                                        <div className="w-1 mr-4 inset-0 bg-gradient-to-b from-[#f43f5e] via-[#64748B] to-[#FB923C] rounded-sm"></div>
                                        <div>
                                            <h3 className="text-white text-lg font-semibold">
                                                {uniBackground.courseName}
                                            </h3>
                                            <Link to={'https://uits.edu.bd/'} target='_blank'>
                                                <p className='text-sm hover:text-blue-300 hover:underline'>{uniBackground.uName}</p>
                                            </Link>
                                            <p className="text-sm">{uniBackground.year}</p>
                                        </div>
                                    </div>
                                </>
                            ))}
                        </TabPanel>
                        <TabPanel>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {/* <div className="w-full h-auto">
                                    <img
                                        src={certificate_one}
                                        alt='programming hero'
                                        className="w-full h-full object-cover rounded-lg shadow-md"
                                    />
                                </div> */}

                                <div className="w-full aspect-[4/3]">
                                    <img
                                        src={certificate_one}
                                        alt="certificate"
                                        className="w-full h-full object-contain rounded-lg shadow-md"
                                    />
                                </div>

                            </div>
                        </TabPanel>
                    </div>
                </Tabs>
            </div>
        </>
    )
}

export default Education
