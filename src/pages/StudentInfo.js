import React from "react";
import PageContainer from "../components/PageContainer";
import Header from "../components/Header";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const StudentInfo = () => {
    let studentInfo = localStorage.getItem("studentSlot");
    const naviagte = useNavigate();
    const data = JSON.parse(studentInfo);
    return (
        <PageContainer>
            <Header />
            <div
                className="bg-slate-50 flex flex-col items-center justify-center text-center gap-10 px-6"
                style={{ height: "calc(40rem - 48px)" }}
            >
                <BsArrowLeft
                    onClick={() => naviagte("/")}
                    className="absolute top-14 left-4 text-2xl text-gray-600 cursor-pointer hover:-translate-x-1 transition-all duration-300"
                />
                <div className="text-lg text-gray-800 textBox">
                    Your name{" "}
                    <span className="capitalize font-semibold text-indigo-900">
                        {data?.name}
                    </span>{" "}
                    aged{" "}
                    <span className="font-semibold text-indigo-900">
                        {data?.age}
                    </span>{" "}
                    <br />
                    has been added to student system.
                </div>
                <p className="text-sm text-gray-700">You may exit now</p>
            </div>
        </PageContainer>
    );
};

export default StudentInfo;
