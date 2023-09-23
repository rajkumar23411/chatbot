import React from "react";
import { useDispatch } from "react-redux";
import { addStudentInfo } from "../redux/reducers/studentReducer";

const Age = ({ actionProvider }) => {
    const [isAgeSelected, setIsAgeSelected] = React.useState(false);
    const dispatch = useDispatch();
    const handleAgeChange = (e) => {
        if (e.target.value >= 18 || e.target.value !== "") {
            dispatch(addStudentInfo({ age: +e.target.value }));
            actionProvider.handleUserAgeInput(e.target.value);
            setIsAgeSelected(true);
        }
    };

    return (
        <div
            className={`w-max mx-auto bg-white shadow border border-pink-200 rounded-lg ${
                isAgeSelected ? "hidden" : "flex widgets"
            } items-center justify-center px-10 py-4 flex-col h-max gap-4`}
        >
            <h1 className="text-gray-900 font-medium">Select your Age</h1>
            {/* drop down from 18 - 40 */}
            <select
                name="age"
                className="w-max h-10 bg-transparent border border-gray-300 rounded-md outline-none px-2"
                onChange={(e) => handleAgeChange(e)}
            >
                <option defaultValue="">Select</option>
                {Array.from({ length: 23 }, (_, i) => i + 18).map((age) => (
                    <option key={age} value={age}>
                        {age}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Age;
