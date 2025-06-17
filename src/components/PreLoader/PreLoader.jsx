import { DotLottieReact } from "@lottiefiles/dotlottie-react"

const PreLoader = () => {
    return (
        <>
            <div className="fixed top-0 left-0 w-full h-screen z-[9999] overflow-hidden">
                <div className="absolute inset-0 animate-gradient bg-gradient-to-br 
                  from-[#f43f5e] via-[#64748B] to-[#FB923C]
                  backdrop-blur-xl opacity-90"></div>
                <div className="absolute inset-0 bg-black/30 z-[1]"></div>
                <div className="relative flex justify-center items-center h-full z-10">
                    <DotLottieReact
                        src="https://lottie.host/630e77c7-ecd0-4dd8-ae55-e4e33192a248/Oxc3pUO2Vx.json"
                        background="transparent"
                        loop
                        autoplay
                        speed="1"
                        className="w-[400px] h-[400px] md:w-[550px] md:h-[550px]"
                    />
                </div>
            </div>


        </>
    )
}

export default PreLoader
