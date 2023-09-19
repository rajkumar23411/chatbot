import React from "react";

const Age = ({ actionProvider }) => {
    const [isAgeSelected, setIsAgeSelected] = React.useState(false);
    const handleAgeChange = (e) => {
        if (e.target.value >= 18 || e.target.value !== "") {
            actionProvider.handleUserAgeInput(e.target.value);
            setIsAgeSelected(true);
        }
    };

    return (
        <div
            className={`w-max mx-auto bg-white shadow-md border border-gray-300 rounded-lg ${
                isAgeSelected ? "hidden" : "flex"
            } items-center justify-center px-4 py-2 flex-col h-max gap-4`}
        >
            <h1 className="text-indigo-800 font-medium ">Select your Age</h1>
            {/* drop down from 18 - 40 */}
            <select
                name="age"
                className="w-max h-10 bg-transparent border border-gray-300 rounded-md outline-none px-2"
                onChange={(e) => handleAgeChange(e)}
            >
                <option defaultValue="" selected>
                    Select
                </option>
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
