import Header from "../components/Header";
import student from "../assets/student.gif";
import PageContainer from "../components/PageContainer";
import { useNavigate } from "react-router-dom";
const Home = () => {
    const navigate = useNavigate();
    return (
        <PageContainer>
            <Header />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center flex-col gap-6">
                <img src={student} alt="student" />
                <p className=" text-lg font-medium text-center textBox">
                    Enter into student enroll system
                </p>
                <button
                    onClick={() => navigate("/chat")}
                    className="px-4 py-2 bg-purple-600 text-white rounded-md cursor-pointer"
                >
                    Enroll Now
                </button>
            </div>
        </PageContainer>
    );
};

export default Home;
