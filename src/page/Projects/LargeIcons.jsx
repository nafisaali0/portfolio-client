import { SlSocialGithub } from "react-icons/sl";
import useAdminLocalStorage from "../../hooks/useAdminLocalStorage";
import { Link } from "react-router-dom";
import { RiGlobalLine } from "react-icons/ri";
import { RxVideo } from "react-icons/rx";
import { GrUpdate } from "react-icons/gr";
import DeleteProject from './../DeleteProject/DeleteProject';
import PropTypes from "prop-types";
import Feature from './Feature';


const LargeIcons = ({ index, id, github_link, live_link, features, video_link }) => {

    const isAdmin = useAdminLocalStorage();
    console.log(isAdmin)

    return (
        <>
            <div className={`hidden md:flex items-center ${index % 2 !== 0 ? 'justify-start' : 'justify-end'} flex-wrap gap-3 w-full mt-3`}>
                {features && features?.length > 0 && (
                    <Feature features={features} index={index} id={id} />
                )}
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

                <Link
                    to={`/update-project/${id}`}
                    target="_blank"
                    className="w-10 h-10 border border-grayDarkProfileText dark:border-none bg-black/10 dark:bg-white dark:text-black rounded-full flex items-center justify-center hover:scale-110 transition text-2xl"
                >
                    <GrUpdate />
                </Link>
                <DeleteProject key={id} id={id} />
                {/* {
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
                } */}
            </div>
        </>
    )
}

export default LargeIcons

LargeIcons.propTypes = {
    id: PropTypes.number,
    index: PropTypes.number,
    features: PropTypes.string,
    github_link: PropTypes.link,
    live_link: PropTypes.link,
    video_link: PropTypes.link,
};