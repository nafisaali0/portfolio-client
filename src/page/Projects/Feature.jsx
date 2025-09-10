import { LuSquareArrowOutUpRight } from "react-icons/lu";
import { PropTypes } from 'prop-types';

const Feature = ({ features, index }) => {
    const modalId = `modal_${index}`; // unique modal id

    return (
        <div
            className="w-10 h-10 border border-grayDarkProfileText dark:border-none bg-black/10 dark:bg-white dark:text-black rounded-full flex items-center justify-center hover:scale-110 transition text-2xl"
        >
            <button onClick={() => document.getElementById(modalId).showModal()}>
                <LuSquareArrowOutUpRight />
            </button>

            <dialog id={modalId} className="modal">
                <div className="modal-box w-11/12 max-w-5xl bg-black/10 dark:bg-white">
                    <h3 className="font-bold text-lg mb-3">Features</h3>
                    <div className="text-lg ml-6 font-normal">
                        <ul>
                            {features?.split(";")?.map((item, idx) => (
                                <li key={idx}>{item.trim()}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn bg-black/10 dark:bg-white text-black">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Feature;

Feature.propTypes = {
    features: PropTypes.string,
    index: PropTypes.number,
};
