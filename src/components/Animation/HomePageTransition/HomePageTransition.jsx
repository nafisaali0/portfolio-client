import { easeOut, motion } from "framer-motion";


const HomePageTransition = () => {
    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-full h-screen bg-white/50 dark:bg-bodyBG/50 backdrop-blur-xl dark:backdrop-blur-sm z-[999] rounded-b-lg"
                initial={{ y: "-100%" }}
                animate={{ y: "100%" }}
                // transition={{ duration: 3, ease: [0.2, 1, 0.2, 1] }}
                transition={{ duration: 3, ease: easeOut }}
            />
        </>
    )
}

export default HomePageTransition
