import { useState } from "react";
import { CiGrid41 } from "react-icons/ci";
import Navbar from "./Navbar";
const Header = () => {
    const [showNavbar, setShowNavbar] = useState(false);
    return (
        <>
            <div className="h-12 z-40 bg-white drop-shadow-md flex items-center justify-between px-4">
                <h1 className=" text-blue-950 font-sans font-medium">
                    <span className="text-red-600 font-bold">L</span>ean
                    <span className="text-red-600 font-bold">L</span>ink
                </h1>
                <CiGrid41
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
