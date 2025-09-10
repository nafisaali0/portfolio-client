import moment from "moment";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useState } from "react";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hostion_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const CreateProjects = () => {

    const axiosPublic = useAxiosPublic();

    //for intent output 
    const [imagePreview, setImagePreview] = useState(null)
    const [formData, setFormData] = useState({
        title: "",
        category: "",
        description: "",
        language: "",
        live_link: "",
        github_link: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    //image upload in imgBB web hosting
    const handleImageChange = async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append("image", file);

        const res = await axiosPublic.post(image_hostion_api, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        if (res.data.success) {
            const details_image = res.data.data.display_url;
            setImagePreview(details_image);
        }
    };

    // create final post to server 
    const handleCreateProject = async (e) => {
        e.preventDefault();

        const title = e.target.title.value;
        const description = e.target.description.value;
        const features = e.target.features.value;
        const categoryInput = e.target.category.value;
        const category = categoryInput
            .split(',')
            .map(item => item.trim().toLowerCase());
        const language = e.target.language.value;
        const live_link = e.target.live_link.value;
        const github_link = e.target.github_link.value;
        const date = moment().format("MMM Do YY");
        const adminEmail = localStorage.getItem('userEmail');

        const newProject = { title, description, features, date, category, language, live_link, github_link, details_image: imagePreview, adminEmail }
        // console.log(newProject)
        fetch('https://portfolio-server-theta-five.vercel.app/projects', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProject)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire(
                        'Successfully Created Projects'
                    )
                }
            })
    }

    return (
        <>
            <div className="overflow-hidden my-20 p-5">
                <form onSubmit={handleCreateProject}>
                    <div className="flex items-start justify-start flex-col-reverse lg:flex-row gap-7">
                        <div className="w-full lg:w-2/4 h-screen">
                            <div className="h-screen overflow-y-scroll border-[.6px] border-b-white p-12 pt-14">
                                <div>
                                    <label className="text-sm border-2 border-card_white hover:border-light_purple font-semibold px-5 py-3 bg-card_white" htmlFor="fileUpload">
                                        <input type="file" onChange={handleImageChange} name="imageFile" className="hidden" id="fileUpload" />
                                        Add Your Projects Image
                                    </label>
                                </div>
                                <div className="mt-10">
                                    <textarea type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Title.." className="resize-none overflow-y-hidden bg-transparent my-5 py-5 w-full text-lg outline-none font-bold placeholder:text-4xl" />
                                </div>
                                <div className="my-3">
                                    <textarea type="category" name="category" value={formData.category} onChange={handleChange} placeholder="Category" className="resize-none overflow-y-hidden bg-transparent my-5 py-5 w-full text-lg outline-none font-semibold placeholder:text-xl" />
                                </div>
                                <div className="my-3">
                                    <textarea type="text" name="description" value={formData.description} onChange={handleChange} placeholder="Write Your Description here.." className="resize-none overflow-y-hidden bg-transparent my-5 py-5 w-full text-lg  outline-none font-semibold placeholder:text-xl" />
                                </div>
                                <div className="my-3">
                                    <textarea type="text" name="features" value={formData.features} onChange={handleChange} placeholder="Features" className="resize-none overflow-y-hidden bg-transparent my-5 py-5 w-full text-lg  outline-none font-semibold placeholder:text-xl" />
                                </div>
                                <div className="my-3">
                                    <textarea type="text" name="language" value={formData.language} onChange={handleChange} placeholder="Tech Language" className="resize-none overflow-y-hidden bg-transparent my-5 py-5 w-full text-lg  outline-none font-semibold placeholder:text-xl" />
                                </div>
                                <div className="my-3">
                                    <textarea type="text" name="live_link" value={formData.live_link} onChange={handleChange} placeholder="Live Link.." className="resize-none overflow-y-hidden bg-transparent my-5 py-5 w-full text-lg outline-none font-semibold placeholder:text-xl" />
                                </div>
                                <div className="my-3">
                                    <textarea type="text" name="github_link" value={formData.github_link} onChange={handleChange} placeholder="Github Link.." className="resize-none overflow-y-hidden bg-transparent my-5 py-5 w-full text-lg  outline-none font-semibold placeholder:text-xl" />
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-2/4 h-screen">
                            <div className="h-screen border-[.6px] border-white overflow-y-scroll p-12 pt-14">
                                <div className="flex flex-col justify-end items-end">
                                    <button className="btn border-none text-white hover:bg-gradienthover">Publish</button>
                                </div>
                                <div className="my-5 h-3/5 overflow-hidden">
                                    <h1 className=" "><img className="w-full h-full object-cover" src={imagePreview} alt="" /></h1>
                                </div>
                                <div className="my-10">
                                    <h1 type="text" name="title" placeholder="Title.." className="text-4xl font-bold placeholder:text-4xl">{formData.title}</h1>
                                </div>
                                <div className="my-3">
                                    <p className="text-xl font-semibold placeholder:text-xl">{formData.category}</p>
                                </div>
                                <div className="my-3">
                                    <p className="text-xl font-semibold placeholder:text-xl">{formData.description}</p>
                                </div>
                                <div className="my-3">
                                    <p className="text-xl font-semibold placeholder:text-xl">{formData.language}</p>
                                </div>
                                <div className="my-3">
                                    <p className="text-xl font-semibold placeholder:text-xl">{formData.live_link}</p>
                                </div>
                                <div className="my-3">
                                    <p className="text-xl font-semibold placeholder:text-xl">{formData.github_link}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default CreateProjects
