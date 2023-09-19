import React, { useState } from "react";

const Slot = ({ actionProvider }) => {
    const [isClicked, setIsClicked] = useState(false);
    const slots = [
        {
            id: 1,
            name: "Slot 1",
            day: "SUN",
            date: "10 MAY",
            time: "10AM",
        },
        {
            id: 2,
            name: "Slot 2",
            day: "SAT",
            date: "15 MAY",
            time: "11AM",
        },
        {
            id: 3,
            name: "Slot 3",
            day: "MON",
            date: "20 MAY",
            time: "12AM",
        },
    ];
    //  set the selected slot to local storage
    const handleSlot = async (slot) => {
        await localStorage.setItem("studentSlot", JSON.stringify(slot));
        actionProvider.handleSlotClick();
        setIsClicked(true);
    };

    return (
        <div className={`${isClicked ? "hidden" : "block"} mx-auto w-full`}>
            <div className="flex items-center justify-evenly">
                {slots.map((slot) => (
                    <div
                        key={slot.id}
                        className="flex flex-col items-center justify-center bg-white drop-shadow-md rounded-md px-6 py-2 gap-1 border border-gray-200 hover:bg-purple-100 cursor-pointer"
                        onClick={() => handleSlot(slot)}
                    >
                        <div className="text-sm font-medium text-purple-800">
                            {slot.date}
                        </div>
                        <div className="text-xs font-semibold text-gray-600">
                            {slot.day}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Slot;
