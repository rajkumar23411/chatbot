import { AiOutlineClose } from "react-icons/ai";
const Navbar = ({ showNavbar, onClose }) => {
    return (
        <div
            className={`w-72 h-full bg-white absolute top-0 right-0 transition-all duration-300 ease-in-out  shadow-xl shadow-gray-400 z-50 ${
                showNavbar ? "translate-x-0" : "translate-x-full"
            }`}
        >
            <AiOutlineClose
                className="absolute top-3 left-3 text-gray-600 cursor-pointer"
                size={20}
                onClick={onClose}
            />
        </div>
    );
};

export default Navbar;
