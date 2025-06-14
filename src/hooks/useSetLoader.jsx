import { useEffect, useState } from "react";

const useSetLoader = (delay = 5500) => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), delay);
        return () => clearTimeout(timer);
    }, [delay]);

    return loading;
}

export default useSetLoader




// const usePreloader = (delay = 2500) => {
//

//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), delay);
//     return () => clearTimeout(timer);
//   }, [delay]);

//   return loading;
// };
