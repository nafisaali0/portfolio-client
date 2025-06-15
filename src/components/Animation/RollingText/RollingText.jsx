
import { motion } from 'framer-motion';
import { PropTypes } from 'prop-types';
const rollingVariant = {
    hidden: { y: "100%", opacity: 0 },
    visible: (i) => ({
        y: "0%",
        opacity: 1,
        transition: {
            delay: i * 0.05,
            duration: 0.5,
            ease: "easeOut",
        },
    }),
};

const RollingText = ({ text, className }) => {
    return (
        <>
            <div className={`overflow-hidden flex ${className}`}>
                {text.split("").map((letter, index) => (
                    <motion.span
                        key={index}
                        custom={index}
                        initial="hidden"
                        animate="visible"
                        variants={rollingVariant}
                        className="inline-block"
                    >
                        {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                ))}
            </div>
        </>
    )
}

export default RollingText

RollingText.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};