import { TiDelete } from "react-icons/ti";
import Swal from "sweetalert2";
import PropTypes from "prop-types";

const DeleteProject = ({ id }) => {
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/projects/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.deletedCount > 0) {
                    Swal.fire("Deleted!", "Your project has been deleted.", "success");
                }
            });
    };

    return (
        <li
            onClick={() => handleDelete(id)}
            title="Delete"
            className="w-12 h-12 border border-grayDarkProfileText dark:border-none bg-black/10 dark:bg-white dark:text-black rounded-full flex items-center justify-center hover:scale-110 transition text-2xl"
        >
            <TiDelete />
        </li>
    );
};

DeleteProject.propTypes = {
    id: PropTypes.string,
};

export default DeleteProject;
