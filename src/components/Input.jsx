import React, { useEffect } from "react";
import { FiSend } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { addStudentInfo } from "../redux/reducers/studentReducer";
export const Input = ({ actionProvider }) => {
    const [isNameEntered, setIsNameEntered] = React.useState(false);
    const [name, setName] = React.useState("");
    const [isNameSubmitted, setIsNameSubmitted] = React.useState(false);
    const dispatch = useDispatch();
    const handleNameInputChange = (e) => {
        setName(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.length > 0) {
            dispatch(
                addStudentInfo({
                    name: name,
                })
            );
            actionProvider.handleUserNameInput(name);
            setName("");
            setIsNameSubmitted(true);
        }
    };

    useEffect(() => {
        if (name.length > 0) {
            setIsNameEntered(true);
        } else {
            setIsNameEntered(false);
        }
    }, [name]);

    return (
        <div
            className={`h-14 shadow-2xl absolute bottom-0 p-1 left-0 right-0 w-full overflow-hidden ${
                isNameSubmitted ? "hidden" : "flex widgets"
            } items-center justify-center gap-1`}
        >
            <form
                className="h-full w-full rounded-xl bg-gray-200 border border-gray-300"
                onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    placeholder="Enter your name here..."
                    className="h-full w-full overflow-hidden bg-transparent px-2 outline-none placeholder:font-light"
                    value={name}
                    onChange={(e) => handleNameInputChange(e)}
                />
            </form>
            <button
                type="submit"
                onClick={handleSubmit}
                className={`h-full w-16 ${
                    isNameEntered ? "bg-pink-600" : "bg-pink-400"
                } flex items-center justify-center rounded-xl`}
            >
                <FiSend className="text-white text-xl" />
            </button>
        </div>
    );
};
