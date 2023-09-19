import Header from "../components/Header";
import PageContainer from "../components/PageContainer";
import "react-chatbot-kit/build/main.css";
import config from "../chatbot/config";
import MessageParser from "../chatbot/MessageParser";
import Chatbot from "react-chatbot-kit";
import ActionProvider from "../chatbot/ActionProvider";

const ChatBot = () => {
    return (
        <PageContainer>
            <Header />
            <Chatbot
                config={config}
                messageParser={MessageParser}
                actionProvider={ActionProvider}
            />
        </PageContainer>
    );
};

export default ChatBot;
