import { BsChatTextFill } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { PiFileArrowDownFill } from "react-icons/pi";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { TfiEmail } from "react-icons/tfi";
import { VscGithubInverted } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { LINKS } from "../../components/Link/LinkStore";
import Swal from "sweetalert2";
import { useRef } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
    
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_4gu69xm', 'template_b0bsejm', form.current, 'GMwd2_s7nL2f8AfHQ')
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Thanks to contact with me",
                    showConfirmButton: false,
                    timer: 1500
                });
            }, (error) => {
                console.log(error.text);
            });

    };

    return (
        <>
            <div className="max-w-4xl p-5 mx-auto mt-52 mb-10 overflow-hidden">
                <div className="flex flex-col items-start justify-center">
                    <div className="flex items-center justify-center gap-5 my-3 text-left">
                        <div className="lg:text-[135px] md:text-[120px] text-[55px] font-extrabold uppercase leading-[0.9em]">Let's</div>
                        <div className="w-10 h-10 lg:w-20 lg:h-20 flex items-center justify-center flex-row">
                            <a
                                href={LINKS.whatsapp}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="WhatsApp"
                            >
                                <FaWhatsapp className="text-[40px]  hover:animate-spin hover:transition hover:duration-[400ms] hover:ease-in-out" title="whatsapp" />
                            </a>
                        </div>
                        <div className="lg:text-[135px] md:text-[100px] text-[60px] font-extrabold uppercase leading-[0.9em]">Talk</div>
                    </div>
                    <div className="flex justify-between items-center flex-col lg:flex-row w-full mt-6">
                        <div className="flex-1 p-2 text-center lg:text-start text-sm lg:text-lg  font-semibold">
                            <p>Although I’m currently looking for opportunities, my inbox is always open.</p>
                        </div>
                        <div className="flex justify-end items-center flex-1 flex-wrap gap-2 p-2">
                            <a
                                href={LINKS.resume}
                                target="_blank"
                                className="w-10 h-10 border border-grayDarkProfileText dark:border-none bg-black/5 dark:bg-white dark:text-black rounded-full flex items-center justify-center hover:scale-110 transition text-lg"
                            >
                                <PiFileArrowDownFill />
                            </a>
                            <Link
                                to={LINKS.github}
                                target="_blank"
                                className="w-10 h-10 border border-grayDarkProfileText dark:border-none bg-black/5 dark:bg-white dark:text-black rounded-full flex items-center justify-center hover:scale-110 transition text-lg"
                            >
                                <VscGithubInverted />
                            </Link>
                            <Link
                                to={LINKS.linkedIn}
                                target="_blank"
                                className="w-10 h-10 border border-grayDarkProfileText dark:border-none bg-black/5 dark:bg-white dark:text-black rounded-full flex items-center justify-center hover:scale-110 transition text-lg"
                            >
                                <TbBrandLinkedinFilled />
                            </Link>
                            <a
                                href={LINKS.email}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 border border-grayDarkProfileText dark:border-none bg-black/5 dark:bg-white dark:text-black rounded-full flex items-center justify-center hover:scale-110 transition text-lg"
                            >
                                <TfiEmail />
                            </a>
                            {/* Open the modal using document.getElementById('ID').showModal() method */}
                            <div
                                className="w-10 h-10 border border-grayDarkProfileText dark:border-none bg-black/5 dark:bg-white dark:text-black rounded-full flex items-center justify-center hover:scale-110 transition text-lg"
                                onClick={() => document.getElementById('my_modal_5').showModal()}
                            >
                                <BsChatTextFill />
                            </div>
                            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle bg-white/50 dark:bg-bodyBG/50 backdrop-blur-xl dark:backdrop-blur-sm">
                                <div className="modal-box dark:bg-black">
                                    <div className="modal-action dark:bg-black">
                                        {/* form */}
                                        <div className="w-full">
                                            <form ref={form} onSubmit={sendEmail} className="bg-white px-8 pt-6 pb-8 mb-4 dark:bg-black">
                                                <div className="mb-4">
                                                    <label className="block text-grayLightProfileText dark:text-grayDarkAlltext text-sm font-bold mb-2" htmlFor="name">
                                                        Name
                                                    </label>
                                                    <input type="text" name="user_name" className=" dark:bg-black shadow appearance-none border border-grayDarkAlltext rounded w-full py-2 px-3 text-grayLightProfileText dark:text-grayDarkAlltext leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="name" />
                                                </div>
                                                <div className="mb-4">
                                                    <label className="block text-grayLightProfileText dark:text-grayDarkAlltext text-sm font-bold mb-2" htmlFor="email">
                                                        Email
                                                    </label>
                                                    <input type="text" name="user_email" className="dark:bg-black shadow appearance-none border border-grayDarkAlltext rounded w-full py-2 px-3 text-gray-700 dark:text-grayDarkAlltext leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Username" />
                                                </div>
                                                <div className="mb-4">
                                                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-grayLightProfileText dark:text-grayDarkAlltext">Your message</label>
                                                    <textarea name="message" id="message" rows="4" className="dark:bg-black block p-2.5 w-full text-sm text-grayLightProfileText appearance-none rounded-lg border border-grayDarkAlltext dark:text-grayDarkAlltext shadow focus:outline-none" placeholder="Drop your comments here..."></textarea>
                                                </div>
                                                <div className="relative inline-block group my-2">
                                                    <button type='submit' value="Send" className="relative z-10 px-8 py-2 border-2 border-grayDarkAlltext dark:border-white rounded-full text-black dark:text-white bg-transparent transition-all duration-300 ease-in-out overflow-hidden">
                                                        Send
                                                    </button>
                                                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#f43f5e] via-[#fb923c] to-[#f43f5e] opacity-60 scale-0 group-hover:scale-125 group-hover:opacity-90 transition-all duration-[900ms] ease-out blur-md z-0" />
                                                </div>
                                            </form>
                                        </div>
                                        <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className="btn btn-sm btn-circle top-2">✕</button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>
                        </div>
                    </div>
                    <div className="w-full relative h-px inset-0 bg-gradient-to-r from-[#f43f5e] via-[#64748B] to-[#FB923C]  mt-44 flex justify-center items-center">
                        <div className="absolute px-4 py-2 text-sm font-semibold bg-black text-white dark:bg-white dark:text-black shadow-2xl rounded-full">
                            Design & Development by
                            <span className="underline px-1 gradientHover">
                                <Link target="_blank" to={LINKS.github}>Nafisa Ali</Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
