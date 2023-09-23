import React from "react";
import { useNavigate } from "react-router-dom";

const Timer = () => {
    const [time, setTime] = React.useState(5);
    const navigate = useNavigate();
    React.useEffect(() => {
        const interval = setInterval(() => {
            // when time is 0, close the timer
            if (time === 0) {
                clearInterval(interval);
                navigate("/student/info");
            } else {
                setTime(time - 1);
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [time, navigate]);

    return (
        <div className="bg-red-100 w-full absolute bottom-0 left-0 py-2 text-center text-red-700">
            <p>Bot will exit in {time} seconds</p>
        </div>
    );
};

export default Timer;
