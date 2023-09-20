import { useState } from "react";

const GotItBtn = ({ actionProvider }) => {
    const [isClicked, setIsClicked] = useState(false);
    const clickHandler = () => {
        actionProvider.handleGotItClick();
        setIsClicked(true);
    };
    return (
        <div
            onClick={clickHandler}
            className={`${
                isClicked
                    ? "hidden"
                    : "flex items-center justify-center absolute w-full bottom-5 left-0 widgets"
            }`}
        >
            <button className="w-max border border-pink-500 text-pink-600 font-normal px-5 py-2 rounded-md">
                Got it!
            </button>
        </div>
    );
};

export default GotItBtn;
