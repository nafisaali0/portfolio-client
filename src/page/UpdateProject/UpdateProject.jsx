import { useState } from "react";
import { useLoaderData } from "react-router-dom"
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import moment from "moment";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hostion_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const UpdateProject = () => {

  const selectProject = useLoaderData()
  const { _id, title, description, category, language, live_link, github_link, details_image } = selectProject
  // modify need:

  // const blogs = useLoaderData()//load all blogs info
  // const { _id, title, short_description, long_description, details_image, category } = blogs
  // const [users] = useUsers();
  // const currentUser = users.length > 0 ? users[0] : {};

  const axiosPublic = useAxiosPublic();
  const [imagePreview, setImagePreview] = useState(details_image)

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

  const handleUpdateProject = e => {
    e.preventDefault();

    const title = e.target.title.value;
    const description = e.target.description.value;
    const categoryInput = e.target.category.value;
    const category = categoryInput
      .split(',')
      .map(item => item.trim().toLowerCase());
    const language = e.target.language.value;
    const live_link = e.target.live_link.value;
    const github_link = e.target.github_link.value;
    const date = moment().format("MMM Do YY");
    const adminEmail = localStorage.getItem('userEmail');

    const updateProject = { title, description, date, category, language, live_link, github_link, details_image: imagePreview, adminEmail }
    console.log(updateProject)


    // sent update projects into to server
    fetch(`https://portfolio-server-theta-five.vercel.app/projects/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(updateProject)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.modifiedCount > 0) {
          Swal.fire(
            'Updated!',
            'Your Project has been Updated.',
            'success'
          )
        }

      })
  }

  return (
    <>
      <div className="max-w-5xl mx-auto overflow-hidden my-20 p-5">
        <form onSubmit={handleUpdateProject}>
          <div className="flex justify-end items-end">
            <button className="btn border-none bg-light_purple text-white hover:bg-hover_btn">Update Blog</button>
          </div>
          <div className="my-5 h-3/5 overflow-hidden relative">
            <img className="w-full h-[500px] object-cover" src={imagePreview} alt="" />
            <div>
              <label className="absolute bottom-0 text-center left-0 w-full text-sm hover:text-white hover:bg-light_purple font-semibold px-5 py-3 bg-card_white" htmlFor="fileUpload">
                <input type="file" onChange={handleImageChange} name="imageFile" className="hidden" id="fileUpload" />
                Change Project Image
              </label>
            </div>
          </div>
          <div className="mt-10">
            <label htmlFor="Title" className="text-2xl font-bold">Title</label>
            <textarea type="text" name="title" defaultValue={title} className="resize-none bg-transparent font-semibold py-5 w-full text-lg outline-none placeholder:text-4xl" />
          </div>
          <div>
            <label htmlFor="Title" className="text-2xl font-bold">Category</label>
            <textarea type="text" name="category" defaultValue={category} placeholder="Project's Categories" className="resize-none bg-transparent my-5 py-5 w-full text-lg  outline-none font-semibold placeholder:text-xl" />
          </div>
          <div className="my-3">
            <label htmlFor="Title" className="text-2xl font-bold">Description</label>
            <textarea type="text" name="description" defaultValue={description} placeholder="Project's Description.." className="resize-none bg-transparent my-5 py-5 w-full text-lg  outline-none font-semibold placeholder:text-xl" />
          </div>
          <div>
            <label htmlFor="Title" className="text-2xl font-bold">Tech Language</label>
            <textarea type="text" name="language" defaultValue={language} placeholder="Tech Language" className="resize-none bg-transparent my-5 py-5 w-full text-lg  outline-none font-semibold placeholder:text-xl" />
          </div>
          <div>
            <label htmlFor="Title" className="text-2xl font-bold">Live Link</label>
            <textarea type="text" name="live_link" defaultValue={live_link} placeholder="Project's Live Link" className="resize-none bg-transparent my-5 py-5 w-full text-lg  outline-none font-semibold placeholder:text-xl" />
          </div>
          <div>
            <label htmlFor="Title" className="text-2xl font-bold">Github Link</label>
            <textarea type="text" name="github_link" defaultValue={github_link} placeholder="Project's Github Link" className="resize-none bg-transparent my-5 py-5 w-full text-lg  outline-none font-semibold placeholder:text-xl" />
          </div>
        </form>
      </div>
    </>
  )
}

export default UpdateProject
