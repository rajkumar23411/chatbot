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
    }, [time]);

    return (
        <div className="w-full text-center text-sky-600 underline">
            <p>Bot will exit in {time} seconds</p>
        </div>
    );
};

export default Timer;
