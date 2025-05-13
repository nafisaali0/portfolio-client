import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import certificate_one from "../../../public/education/programming_hero_certificate.jpg"
const Education = () => {

    const education = [
        {
            "_id": "1",
            "link": "https://uits.edu.bd/",
            "instituteName": "University of Information Technology and Sciences(UITS)",
            "courseName": "Bachelor of Technology in Computer Science Engineering(CSE)",
            "year": "2020 - 2023",
        },
        {
            "_id": "2",
            "link": "https://mubc.edu.bd/",
            "instituteName": "Monipur Uchcha Biddalaya and College",
            "courseName": "Higher Secondary Certificate(HSC)",
            // "year": "2020 - 2023",
        },
        {
            "_id": "2",
            "link": "https://mgili.edu.bd/",
            "instituteName": "Mirpur Girls Ideal Laboratory Institute",
            "courseName": "Secondary School Certificate(SSC)",
            // "year": "2020 - 2023",
        }
    ];

    const [selectedTab, setSelectedTab] = useState(0);//for Tab list
    const handleTabSelect = (index) => {
        setSelectedTab(index);
    };

    return (
        <>
            <div className="max-w-4xl p-5 mx-auto mt-36 overflow-hidden">
                <h1 className="text-2xl font-bold dark:text-grayDarkAlltext">Education Background</h1>

                <Tabs onSelect={(index) => handleTabSelect(index)}>
                    <TabList className={"cursor-pointer flex gap-5 items-center text-lg font-semibold my-5 text-black dark:text-grayDarkAlltext"}>
                        <Tab className={`${selectedTab === 0 ? 'p-2 border-b-2 outline-none bg-white dark:bg-transparent dark:text-grayDarkAlltext' : ''}`}>Academic</Tab>
                        <Tab className={`${selectedTab === 1 ? 'p-2 border-b-2 outline-none bg-white dark:bg-transparent dark:text-grayDarkAlltext' : ''}`}>Course's Certificates</Tab>
                    </TabList>
                    <div className="my-8 text-black dark:text-grayDarkAlltext">
                        <TabPanel>
                            {education.map((eduBackground, index) => (
                                <>
                                    <div className="flex my-8" key={index}>
                                        <div className="w-1 mr-4 inset-0 bg-gradient-to-b from-[#f43f5e] via-[#64748B] to-[#FB923C] rounded-sm"></div>
                                        <div>
                                            <h3 className="dark:text-white text-lg font-semibold">
                                                {eduBackground.courseName}
                                            </h3>
                                            <Link to={eduBackground.link} target='_blank'>
                                                <p className='text-sm hover:text-blue-300 hover:underline'>{eduBackground.instituteName}</p>
                                            </Link>
                                            <p className="text-sm">{eduBackground.year}</p>
                                        </div>
                                    </div>
                                </>
                            ))}
                        </TabPanel>
                        <TabPanel>
                            {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"> */}
                                <div className="max-w-full mx-auto p-4">
                                    <img
                                        src={certificate_one}
                                        alt="Descriptive Alt Text"
                                        className="w-full h-auto block rounded-lg shadow-md object-contain"
                                    />
                                </div>
                            {/* </div> */}
                        </TabPanel>
                    </div>
                </Tabs>
            </div>
        </>
    )
}

export default Education
