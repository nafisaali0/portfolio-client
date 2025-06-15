import { easeOut, motion } from "framer-motion";


const HomePageTransition = () => {
    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-full h-screen bg-wihte dark:bg-black  z-[999] rounded-b-lg"
                initial={{ y: "-100%" }}
                animate={{ y: "100%" }}
                transition={{ duration: 2, delay: 1, ease: easeOut }}
            />
        </>
    )
}

export default HomePageTransition
