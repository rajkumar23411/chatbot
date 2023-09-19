import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Navbar from "./Navbar";
const Header = () => {
    const [showNavbar, setShowNavbar] = useState(false);
    return (
        <>
            <div className="h-12 bg-white drop-shadow-md flex items-center justify-between px-4">
                <h1 className="font-semibold text-gray-900">ChatBot</h1>
                <AiOutlineMenu
                    size={25}
                    className="cursor-pointer text-gray-600"
                    onClick={() => setShowNavbar(true)}
                />
            </div>
            {showNavbar && (
                <Navbar
                    showNavbar={showNavbar}
                    onClose={() => setShowNavbar(false)}
                />
            )}
        </>
    );
};

export default Header;
