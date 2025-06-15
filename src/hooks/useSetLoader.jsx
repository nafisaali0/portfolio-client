import { useEffect, useState } from "react";

const useSetLoader = (delay = 5000) => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), delay);
        return () => clearTimeout(timer);
    }, [delay]);

    return loading;
}

export default useSetLoader

