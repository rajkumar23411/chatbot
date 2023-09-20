import React from "react";
import { FaRobot } from "react-icons/fa6";

const BotAvatar = () => {
    return (
        <div className="react-chatbot-kit-chat-bot-avatar">
            <div
                className="react-chatbot-kit-chat-bot-avatar-container"
                style={{ background: "none" }}
            >
                <FaRobot className="text-pink-900" />
            </div>
        </div>
    );
};

export default BotAvatar;
