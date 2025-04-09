import profile from "../../../../public/logo/profileImage.png"
// import { MdLocationCity } from "react-icons/md";
// import { HiLocationMarker } from "react-icons/hi";
import { ImLocation2 } from "react-icons/im";
// for home
import { VscGithubInverted } from "react-icons/vsc";
// github
import { TiSocialLinkedinCircular } from "react-icons/ti";
//linkedin
import { PiFileArrowDownFill } from "react-icons/pi";
// import { BsFileArrowDownFill } from "react-icons/bs";
// resume

const Profile = () => {
    return (
        <>
            <div className="flex justify-center items-center space-x-16">
                <div className="inset-0 bg-gradient-to-r from-orange-500 via-red-500 to-purple-500 rounded-full p-1">
                    <div className="w-full h-full rounded-full">
                        <img src={profile} alt="Avatar" className="w-[170px] h-[170px] object-cover rounded-full border-white border-4" />
                    </div>
                </div>
                <div>
                    <p className="text-3xl font-bold">
                        Hey, I'm <span className="text-white">Nafisa</span>.
                        I'm a <span className="text-gray-300 font-semibold">Frontend</span>
                    </p>
                    <div className="flex justify-start items-center my-2">
                        <span className="text-gray-300 font-semibold pr-3 text-3xl">Software Developer.</span>
                        <p className="inline-block px-5 py-1 text-md rounded-full bg-green-600/20 hover:text-green-500 text-green-600 hover:bg-green-500/20" >● Open to work</p>
                    </div>
                    <div className="flex justify-between items-center gap-5 mt-7">
                        <div className="flex justify-start space-x-2 items-center">
                            <span>
                                {/* <MdLocationCity /> */}
                                {/* <HiLocationMarker /> */}
                                <ImLocation2 />
                            </span>
                            <span>
                                Dhaka Bangladesh
                            </span>
                        </div>
                        <div className="flex justify-start space-x-2 items-center">
                            <div className="flex justify-start space-x-2 items-center">
                                <span>
                                    <TiSocialLinkedinCircular/>
                                </span>
                                <span>
                                    LinkedIn
                                </span>
                            </div>
                            <div className="flex justify-start space-x-2 items-center">
                                <span>
                                    <VscGithubInverted />
                                </span>
                                <span>
                                    Github
                                </span>
                            </div>
                            <div className="flex justify-start space-x-2 items-center">
                                <span>
                                    <PiFileArrowDownFill />
                                    {/* <BsFileArrowDownFill /> */}
                                </span>
                                <span>
                                    Resume
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile
