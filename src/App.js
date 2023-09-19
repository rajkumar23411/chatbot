import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ChatBot from "./pages/ChatBot";
import StudentInfo from "./pages/StudentInfo";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chat" element={<ChatBot />} />
            <Route path="/student/info" element={<StudentInfo />} />
        </Routes>
    );
}

export default App;
