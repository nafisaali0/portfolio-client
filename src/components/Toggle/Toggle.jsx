import { useContext } from "react";
import { ThemeContext } from "../../Providers/ThemeProvider";


const Toggle = () => {

    const { toggleTheme, darkMode } = useContext(ThemeContext);
    // useContext(ThemeContext)

    return (
        <>
            {darkMode ? (
                // Moon Icon - Rotate Anti-clockwise
                <button
                    onClick={toggleTheme}
                    className="border rounded-full border-[#f43f5e] rotate-0"
                >
                    <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        className="duration-500 transition-transform hover:rotate-180"
                    >
                        <defs>
                            <linearGradient id="myGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#f43f5e" />
                                <stop offset="100%" stopColor="#fb923c" />
                            </linearGradient>
                        </defs>
                        <path
                            d="M7.63262 3.06689C8.98567 3.35733 9.99999 4.56025 9.99999 6.00007C9.99999 7.65693 8.65685 9.00007 6.99999 9.00007C5.4512 9.00007 4.17653 7.82641 4.01685 6.31997"
                            stroke="url(#myGradient)"
                            strokeWidth="1.5"
                            fill="none"
                        />
                        <path
                            d="M22 13.0505C21.3647 12.4022 20.4793 12 19.5 12C17.567 12 16 13.567 16 15.5C16 17.2632 17.3039 18.7219 19 18.9646"
                            stroke="url(#myGradient)"
                            strokeWidth="1.5"
                            fill="none"
                        />
                        <path
                            d="M14.5 8.51L14.51 8.49889"
                            stroke="url(#myGradient)"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                        />
                        <path
                            d="M10 17C11.1046 17 12 16.1046 12 15C12 13.8954 11.1046 13 10 13C8.89543 13 8 13.8954 8 15C8 16.1046 8.89543 17 10 17Z"
                            stroke="url(#myGradient)"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                        />
                    </svg>
                </button>
            ) : (
                // Sun Icon - Rotate Clockwise
                <button onClick={toggleTheme}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        className="duration-500 transition-transform hover:-rotate-180"
                    >
                        <defs>
                            <linearGradient id="myGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#f43f5e" />
                                <stop offset="100%" stopColor="#fb923c" />
                            </linearGradient>
                        </defs>

                        <path d="M10 3.75H11.25V8.5C11.25 8.91 11.59 9.25 12 9.25C12.41 9.25 12.75 8.91 12.75 8.5V3.75H14C14.41 3.75 14.75 3.41 14.75 3C14.75 2.59 14.41 2.25 14 2.25H10C9.59 2.25 9.25 2.59 9.25 3C9.25 3.41 9.59 3.75 10 3.75Z" stroke="url(#myGradient)" />
                        <path d="M14 20.25H12.75V15.5C12.75 15.09 12.41 14.75 12 14.75C11.59 14.75 11.25 15.09 11.25 15.5V20.25H10C9.59 20.25 9.25 20.59 9.25 21C9.25 21.41 9.59 21.75 10 21.75H14C14.41 21.75 14.75 21.41 14.75 21C14.75 20.59 14.41 20.25 14 20.25Z" stroke="url(#myGradient)" />
                        <path d="M2.83036 9.87896C2.95036 9.94896 3.08036 9.97896 3.20036 9.97896C3.46036 9.97896 3.71036 9.84896 3.85036 9.59896L4.48036 8.51896L8.60037 10.899C8.71037 10.969 8.84036 10.999 8.97037 10.999C9.23036 10.999 9.48036 10.869 9.62036 10.619C9.83036 10.269 9.70037 9.80896 9.35037 9.59896L5.23036 7.21896L5.85036 6.13896C6.06036 5.77896 5.93036 5.31896 5.58036 5.11896C5.22036 4.90896 4.76036 5.02896 4.56036 5.38896L2.56036 8.84896C2.35036 9.21896 2.47036 9.66896 2.83036 9.87896Z" stroke="url(#myGradient)" />
                        <path d="M21.1685 14.1211C20.8085 13.9111 20.3485 14.0311 20.1485 14.3911L19.5185 15.4711L15.3985 13.1011C15.0385 12.8911 14.5785 13.0211 14.3785 13.3711C14.1685 13.7311 14.2985 14.1911 14.6485 14.3911L18.7585 16.7711L18.1385 17.8511C17.9285 18.2111 18.0585 18.6711 18.4085 18.8711C18.5285 18.9411 18.6585 18.9711 18.7785 18.9711C19.0385 18.9711 19.2885 18.8411 19.4285 18.5911L21.4285 15.1311C21.6485 14.7811 21.5285 14.3311 21.1685 14.1211Z" stroke="url(#myGradient)" />
                        <path d="M18.7707 7.22068L14.6507 9.60068C14.2907 9.81068 14.1707 10.2707 14.3807 10.6207C14.5207 10.8607 14.7707 11.0007 15.0307 11.0007C15.1607 11.0007 15.2907 10.9707 15.4007 10.9007L19.5107 8.52068L20.1407 9.60068C20.2807 9.84068 20.5307 9.98068 20.7907 9.98068C20.9207 9.98068 21.0507 9.95068 21.1607 9.88068C21.5207 9.67068 21.6407 9.21068 21.4307 8.86068L19.4307 5.40068C19.2207 5.04068 18.7607 4.92068 18.4107 5.13068C18.0507 5.34068 17.9307 5.80068 18.1407 6.15068L18.7707 7.22068Z" stroke="url(#myGradient)" />
                        <path d="M5.23036 16.7811L9.34036 14.4011C9.70037 14.1911 9.82036 13.7311 9.61036 13.3811C9.40036 13.0211 8.94036 12.9011 8.59036 13.1111L4.48036 15.4911L3.85036 14.4111C3.64036 14.0511 3.18036 13.9311 2.83036 14.1411C2.47036 14.3511 2.35036 14.8111 2.56036 15.1611L4.56036 18.6211C4.70036 18.8611 4.95036 19.0011 5.21036 19.0011C5.34036 19.0011 5.47036 18.9711 5.58036 18.9011C5.94036 18.6911 6.06036 18.2311 5.85036 17.8811L5.23036 16.7811Z" stroke="url(#myGradient)" />
                    </svg>
                </button>
            )}
        </>
    )
}

export default Toggle
