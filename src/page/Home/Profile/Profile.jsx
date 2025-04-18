import profile from "../../../../public/logo/profileImage.png"
import { MdLocationCity } from "react-icons/md";
// import { HiLocationMarker } from "react-icons/hi";
// import { ImLocation2 } from "react-icons/im";
// for home
import { VscGithubInverted } from "react-icons/vsc";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { PiFileArrowDownFill } from "react-icons/pi";


const Profile = () => {
    return (
        <>
            <div className="flex justify-center items-center flex-col md:flex-row space-y-5 md:space-x-14">
                <div className="inset-0 bg-gradient-to-r from-[#f43f5e] via-[#64748B] to-[#FB923C] rounded-full p-1">
                    <div className="w-full h-full rounded-full">
                        <img src={profile} alt="Avatar" className="w-[170px] h-[170px] object-cover rounded-full border-4 border-white" />
                    </div>
                </div>
                <div>
                    <div className="text-4xl md:text-left text-center font-semibold">
                        It's <span className="dark:text-white">Nafisa</span>.
                        I am a <span className="text-grayLightProfileText dark:text-grayDarkProfileText">Frontend</span>
                    </div>
                    <div className="flex justify-start items-center flex-col md:flex-row gap-5 md:my-2">
                        <span className=" text-4xl font-semibold text-grayLightProfileText dark:text-grayDarkProfileText">Web Developer.</span>
                        <div className="inline-block px-5 py-1 text-lg rounded-full my-2 md:my-0 bg-green-900 text-green-300 hover:text-green-100 dark:bg-green-600/20 dark:text-green-600 dark:hover:bg-green-500/20 dark:hover:text-green-500">● Open to work</div>
                    </div>
                    <div className="flex justify-between items-center gap-3 md:gap-6 flex-col md:flex-row mt-5 md:mt-7 text-xm font-medium text-[#0D1117] dark:text-grayDarkAlltext">
                        {/* Location */}
                        <div className="flex justify-start items-center gap-1">
                            <span>
                                <MdLocationCity className="w-5 h-5 dark:text-white" />
                            </span>
                            <span className="gradientHover">Dhaka Bangladesh</span>
                        </div>
                        {/* Social Links */}
                        <div className="flex justify-start items-center gap-3 cursor-pointer">
                            {/* LinkedIn */}
                            <div className="flex items-center gap-1">
                                <TbBrandLinkedinFilled className="w-5 h-5 text-[#0077B5] border-[#0077B5]" />
                                <span className="gradientHover">LinkedIn</span>
                            </div>
                            {/* Github */}
                            <div className="flex items-center gap-1">
                                <VscGithubInverted className="w-5 h-5 dark:text-white" />
                                <span className="gradientHover">Github</span>
                            </div>
                            {/* Resume */}
                            <div className="flex items-center gap-1">
                                <PiFileArrowDownFill className="w-5 h-5 dark:text-white" />
                                <span className="gradientHover">Resume</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile
