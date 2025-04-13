import Profile from "../Profile/Profile"
import Skills from "../Skills/Skills"


const HomeLayout = () => {
    return (
        <>
            <div className="max-w-3xl p-2 mx-auto mt-36 overflow-hidden">
                <Profile></Profile>
                <Skills></Skills>
            </div>
        </>
    )
}

export default HomeLayout
