import { useContext } from "react";
import AnimatedCursor from "react-animated-cursor"
import { ThemeContext } from "../../Providers/ThemeProvider";

const CustomCursor = () => {

    const { darkMode } = useContext(ThemeContext);
    return (
        <>
            <AnimatedCursor
                color={darkMode ? '255,255,255' : '0,0,0'}
                innerSize={8}
                outerSize={35}
                innerScale={1}
                outerScale={1.7}
                outerAlpha={0.5}
                hasBlendMode={true}
                outerStyle={{
                    mixBlendMode: 'Exclusive',
                }}
            />
        </>
    )
}

export default CustomCursor
