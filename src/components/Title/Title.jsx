import { PropTypes } from 'prop-types';
import { motion } from "framer-motion";

const container = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.5, // ⏳ Delay the whole animation by 2 seconds
            staggerChildren: 0.08, // delay between letters
        },
    },
};
const letter = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: "easeOut" },
    },
};

const Title = ({ title }) => {

    return (
        <>
            {/* <h2 className="text-2xl font-semibold uppercase mb-6 text-black dark:text-grayDarkAlltext">{title}</h2> */}

            <motion.h2
                className="text-2xl font-semibold uppercase mb-6 text-black dark:text-grayDarkAlltext flex gap-1 flex-wrap"
                variants={container}
                initial="hidden"
                animate="visible"
            >
                {title.split("").map((char, index) => (
                    <motion.span key={index} variants={letter}>
                        {char === " " ? "\u00A0" : char}
                    </motion.span>
                ))}
            </motion.h2>
        </>
    )
}

export default Title

Title.propTypes = {
    title: PropTypes.string
};


