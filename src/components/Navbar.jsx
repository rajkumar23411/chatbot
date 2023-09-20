import { AiOutlineClose } from "react-icons/ai";
const Navbar = ({ showNavbar, onClose }) => {
    const navbarTags = ["Home", "Chats", "Information", "Contact", "About Us"];
    return (
        <div
            className={`w-72 h-full bg-white absolute top-0 right-0  shadow-xl shadow-gray-400 z-50 flex px-10 py-20 ${
                showNavbar ? "scale-100" : "scale-0"
            } transition-transform duration-500 ease-in-out origin-top-right`}
        >
            <AiOutlineClose
                className="absolute top-3 left-3 text-gray-600 cursor-pointer hover:text-pink-600 hover:rotate-90 transition-all duration-500"
                size={25}
                onClick={onClose}
            />
            <ul className="flex flex-col gap-4">
                {navbarTags.map((tag, index) => (
                    <li
                        key={index}
                        className="text-gray-600  font-medi cursor-pointer hover:text-pink-600 transition-all duration-500"
                    >
                        {tag}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Navbar;
