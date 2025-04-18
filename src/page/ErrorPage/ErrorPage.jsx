import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Link, useRouteError } from "react-router-dom"


const ErrorPage = () => {
    const error = useRouteError();
    return (
        <>
            <div className="container mx-auto flex flex-col justify-center items-center my-10">
                <DotLottieReact
                    src="https://lottie.host/5178edf7-a920-4771-a74f-13640e28a2de/fvVc2ly8S4.lottie"
                    background="transparent"
                    speed="1"
                    style={{ height: '400px', width: '700px' }}
                    loop
                    autoplay
                />
                <div className="flex justify-center items-center flex-col text-lg font-medium px-3 py-3">
                    <p>Ooops! {error.status}</p>
                    <p>Page {error.statusText}</p>
                    <p>It seems you have lost your way.</p>
                    <Link to="/">
                        <div className="relative inline-block group my-2">
                            <button className="relative z-10 px-8 py-2 border-2 border-black dark:border-white rounded-full text-black dark:text-white bg-transparent transition-all duration-300 ease-in-out overflow-hidden">
                                Back To Home
                            </button>
                            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#f43f5e] via-[#fb923c] to-[#f43f5e] opacity-60 scale-0 group-hover:scale-125 group-hover:opacity-90 transition-all duration-[900ms] ease-out blur-md z-0" />
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default ErrorPage
