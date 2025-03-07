import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext(null);
const ThemeProvider = ({ children }) => {

    // const [darkMode, setDarkMode] = useState(true);

    // const toggleTheme = () => {
    //     setDarkMode((mode) => !mode);
    // };

    // useEffect(() => {
    //     document.documentElement.setAttribute(
    //         "data-theme",
    //         darkMode ? "dark" : "light"
    //     );
    // }, [darkMode]);

    // change one -- 
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("theme") === "dark"
    );

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    const toggleTheme = () => setDarkMode((prev) => !prev);

    return (
        <ThemeContext.Provider value={{ toggleTheme, darkMode }}>
            {children}
        </ThemeContext.Provider>
    )
}

ThemeProvider.propTypes = {
    children: PropTypes.node
}
export default ThemeProvider
