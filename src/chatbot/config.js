import { createChatBotMessage } from "react-chatbot-kit";
import GotItBtn from "../components/GotItBtn";
import Slot from "../components/Slot";
import { Input } from "../components/Input";
import Age from "../components/Age";
import Timer from "../components/Timer";

const config = {
    initialMessages: [
        createChatBotMessage("Hi! Welcome to student info system", {
            widget: "gotItBtn",
        }),
    ],
    state: {},
    widgets: [
        {
            widgetName: "gotItBtn",
            widgetFunc: (props) => <GotItBtn {...props} />,
        },
        {
            widgetName: "slotPicker",
            widgetFunc: (props) => <Slot {...props} />,
        },
        {
            widgetName: "userNameInput",
            widgetFunc: (props) => <Input {...props} />,
        },
        {
            widgetName: "userAgeInput",
            widgetFunc: (props) => <Age {...props} />,
        },
        {
            widgetName: "timer",
            widgetFunc: (props) => <Timer {...props} />,
        },
    ],
};

export default config;
