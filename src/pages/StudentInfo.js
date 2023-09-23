import React from "react";
import PageContainer from "../components/PageContainer";
import Header from "../components/Header";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Accepted from "../assets/accepted.gif";
import { useSelector } from "react-redux";
const StudentInfo = () => {
    const { studentInfo } = useSelector((state) => state.student);
    const naviagte = useNavigate();

    return (
        <>
            <PageContainer>
                <Header />
                <div
                    className=" flex flex-col items-center justify-center text-center gap-6 px-6"
                    style={{ height: "calc(40rem - 48px)" }}
                >
                    <BsArrowLeft
                        onClick={() => naviagte("/")}
                        className="absolute top-14 left-4 text-2xl text-gray-600 cursor-pointer hover:-translate-x-1 transition-all duration-300 hover:text-pink-600"
                    />
                    <div className="flex flex-col items-center justify-center">
                        <img
                            src={Accepted}
                            alt="form accepted"
                            className="w-64 h-64 object-contain opacity-90 mb-6"
                        />
                        <h1 className="text-gray-700 widgets ">
                            Your name{" "}
                            <span className="font-medium text-red-600 capitalize">
                                {studentInfo?.name}
                            </span>{" "}
                            aged{" "}
                            <span className="font-medium text-red-600">
                                {studentInfo?.age}
                            </span>
                        </h1>
                        <h1 className="text-gray-700 widgets ">
                            has been added to student system.
                        </h1>
                    </div>
                    <p className="text-sm text-gray-400 widgets">
                        You may{" "}
                        <span
                            className="text-sky-600 cursor-pointer hover:underline"
                            onClick={() => {
                                naviagte("/");
                            }}
                        >
                            exit
                        </span>{" "}
                        now
                    </p>
                </div>
                <div className="absolute bottom-2 text-gray-400 font-light w-full text-center text-xs">
                    Created By Rajkumar Kalita | &copy; 2023
                </div>
            </PageContainer>
        </>
    );
};

export default StudentInfo;
