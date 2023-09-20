import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addStudentInfo } from "../redux/reducers/studentReducer";

const Slot = ({ actionProvider }) => {
    const [isClicked, setIsClicked] = useState(false);
    const dispath = useDispatch();
    const slots = [
        {
            id: 1,
            day: "SUN",
            date: "10 MAY",
            time: "10AM",
        },
        {
            id: 2,
            day: "SAT",
            date: "15 MAY",
            time: "11AM",
        },
        {
            id: 3,
            day: "MON",
            date: "20 MAY",
            time: "12AM",
        },
    ];
    //  set the selected slot to local storage
    const handleSlot = async (slot) => {
        const slotData = {
            day: slot.day,
            date: slot.date,
            time: slot.time,
        };
        dispath(addStudentInfo(slotData));
        actionProvider.handleSlotClick(slotData);
        setIsClicked(true);
    };

    return (
        <div
            className={`${
                isClicked ? "hidden" : "block"
            } mx-auto w-full widgets`}
        >
            <div className="flex items-center justify-evenly">
                {slots.map((slot) => (
                    <div
                        key={slot.id}
                        className="flex flex-col items-center justify-center bg-white rounded-md px-6 py-2 gap-1 border border-pink-200 shadow-sm  hover:bg-purple-100 cursor-pointer"
                        onClick={() => handleSlot(slot)}
                    >
                        <div className="text-sm font-medium text-pink-600">
                            {slot.date}
                        </div>
                        <div className="text-xs font-semibold text-blue-900">
                            {slot.day}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Slot;
