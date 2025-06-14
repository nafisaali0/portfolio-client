import { DotLottieReact } from "@lottiefiles/dotlottie-react"

const PreLoader = () => {
    return (
        <>
            <div className="fixed top-0 left-0 w-full h-screen bg-white/50 dark:bg-bodyBG/50 backdrop-blur-xl dark:backdrop-blur-sm z-[999] rounded-b-lg">
                <div className="flex justify-center items-center">
                    <DotLottieReact
                        src="https://lottie.host/630e77c7-ecd0-4dd8-ae55-e4e33192a248/Oxc3pUO2Vx.json"
                        background="transparent"
                        loop
                        autoplay
                        speed="1"
                        className="w-[400px] h-[400px] md:w-[700px] md:h-[700px]"
                    />
                </div>
            </div>
        </>
    )
}

export default PreLoader
