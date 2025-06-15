import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const useAOS = (options = {}) => {
    useEffect(() => {
        AOS.init({
            duration: 1500,
            easing: "ease-in-out",
            once: true,
            ...options, // override defaults if needed
        });
    }, [options]);
}

export default useAOS
