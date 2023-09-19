import { useState } from "react";

const GotItBtn = ({ actionProvider }) => {
    const [isClicked, setIsClicked] = useState(false);
    const clickHandler = () => {
        actionProvider.handleGotItClick();
        setIsClicked(true);
    };
    return (
        <button
            onClick={clickHandler}
            className={`${
                isClicked ? "hidden" : "block"
            } border-2 border-purple-500 font-semibold text-purple-600 text-sm px-4 py-1 rounded-md`}
        >
            Got it
        </button>
    );
};

export default GotItBtn;
