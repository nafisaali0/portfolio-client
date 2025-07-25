import { DotLottieReact } from "@lottiefiles/dotlottie-react"
import Title from "../../components/Title/Title"
import useAOS from './../../hooks/useAOS';

const About = () => {
  useAOS();
  return (
    <>
      <div className="max-w-4xl p-5 mx-auto mt-36 overflow-hidden">
        <Title title="About" />
        <div className="flex items-center gap-3 flex-col md:flex-row">
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            className="flex-1">
            <p
              className="text-justify leading-relaxed dark:text-white">
              My coding journey started in 2019, right after finishing college, when I began building simple websites using HTML and CSS with Notepad and online resources like W3Schools.
              During my university years, starting in 2020, I explored languages such as C, C++, Java, and Python.<br /><br />
              Motivated by a desire to freelance, <span className="text-emerald-500 dark:text-emerald-600">I completed a course on Elementor and WooCommerce, which gave me insight into CMS-based development.</span>
              To strengthen my frontend skills, I took a self-taught approach—developing over <span className="text-emerald-500 dark:text-emerald-600">10 static projects based on Figma designs from a YouTube creator as inspiration,</span>
              while independently writing all the code to deepen my understanding of layout.<br /><br />
              In 2023, <span className="text-emerald-500 dark:text-emerald-600">I completed a 6-month intensive course focused on modern web development, where I learned how to build full-stack applications using React.js, Node.js, and MongoDB. </span>
              During this course, I developed several projects — from basic websites to advanced applications — three of which I showcase as my featured work.<br /><br />
              I am someone who keeps going, even when things get tough. I like to keep improving my skills and exploring new things. Outside of coding, I love listening to music and expressing myself through art.
            </p>
          </div>
          <div
            data-aos="fade-left"
            data-aos-offset="300"
            className="w-full md:w-1/3">
            <DotLottieReact
              src="https://lottie.host/126ec5b3-1a92-4c89-9e64-e37dbf02c5ba/nY7IUYiGOk.lottie"
              background="transparent"
              speed="1.2"
              loop
              autoplay
              style={{ width: '450px', height: '450px' }}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default About
