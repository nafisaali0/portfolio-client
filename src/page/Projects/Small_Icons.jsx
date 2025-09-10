import { SlSocialGithub } from "react-icons/sl";
import useAdminLocalStorage from "../../hooks/useAdminLocalStorage";
import { PropTypes } from 'prop-types';
import { RiGlobalLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { RxVideo } from "react-icons/rx";
import { GrUpdate } from "react-icons/gr";
import DeleteProject from "../DeleteProject/DeleteProject";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import Feature from "./Feature";


const Small_Icons = ({ index, id, github_link, live_link, features, video_link }) => {
    const isAdmin = useAdminLocalStorage();
    return (
        <>
            <div className="md:hidden flex items-center justify-end gap-3 w-full mt-3 max-md:flex-wrap">
                {features && features?.length > 0 && (
                    <Feature features={features} index={index} id={id} />
                )}
                <Link
                    to={github_link}
                    target="_blank"
                    title="Feature"
                    className="w-10 h-10 border border-grayDarkProfileText dark:border-none bg-black/10 dark:bg-white dark:text-black rounded-full flex items-center justify-center hover:scale-110 transition text-2xl"
                >
                    <LuSquareArrowOutUpRight />
                </Link>
                <Link
                    to={github_link}
                    target="_blank"
                    className="w-10 h-10 border border-grayDarkProfileText dark:border-none bg-black/10 dark:bg-white dark:text-black rounded-full flex items-center justify-center hover:scale-110 transition text-2xl"
                >
                    <SlSocialGithub />
                </Link>
                <Link
                    to={live_link}
                    target="_blank"
                    className="w-10 h-10 border border-grayDarkProfileText dark:border-none bg-black/10 dark:bg-white dark:text-black rounded-full flex items-center justify-center hover:scale-110 transition text-2xl"
                >
                    <RiGlobalLine />
                </Link>
                {video_link?.length > 0 && (

                    <Link
                        to={video_link}
                        target="_blank"
                        className="w-10 h-10 border border-grayDarkProfileText dark:border-none bg-black/10 dark:bg-white dark:text-black rounded-full flex items-center justify-center hover:scale-110 transition text-2xl"
                    >
                        <RxVideo />
                    </Link>
                )}
                {
                    isAdmin ?

                        <>
                            <Link
                                to={`/update-project/${id}`}
                                target="_blank"
                                className="w-10 h-10 border border-grayDarkProfileText dark:border-none bg-black/10 dark:bg-white dark:text-black rounded-full flex items-center justify-center hover:scale-110 transition text-2xl"
                            >
                                <GrUpdate />
                            </Link>
                            <DeleteProject key={id} id={id} />
                        </>
                        : ""
                }

            </div>
        </>
    )
}

export default Small_Icons

Small_Icons.propTypes = {
    index: PropTypes.number,
    id: PropTypes.number,
    github_link: PropTypes.link,
    features: PropTypes.string,
    live_link: PropTypes.link,
    video_link: PropTypes.link,
};