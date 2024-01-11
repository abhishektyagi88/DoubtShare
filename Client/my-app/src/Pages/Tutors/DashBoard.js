import React from "react";
import { useNavigate } from "react-router-dom";

function DashboardTutor() {
    const navigate = useNavigate();

    return (
        <div className="bg-blue-600 h-[100vh]">
            <div className="flex justify-between">
                <div className='font-semibold pt-[10px] pl-[10px] flex'>
                    <p className='text-[80px] text-yellow-400'>Doubt</p>
                    <p className='text-4xl  text-yellow-400'>Share</p>
                </div>
                <div className="flex flex-col">
                    <div className="flex mr-6 mt-4 gap-3 text-2xl text-yellow-400 font-bold">
                        <i className="text-red-500 ri-shield-star-fill"></i>

                    </div>
                    <p className="text-center text-xl text-yellow-400 font-bold cursor-pointer"
                        onClick={() => {
                            localStorage.removeItem("token");
                            navigate("/login");
                        }}
                    >Logout <i className="ri-logout-circle-r-line"></i></p>
                </div>
            </div>
            <div className="text-[100px] font-bold text-yellow-400 flex gap-[100px]">
                <p>I am Tutor</p>
                <div className="mr-[50px] mt-[80px]">
                    <img className="h-[500px]" src=
                        "https://careerwise.co.za/wp-content/uploads/2019/11/Tutoring.jpg"
                        alt="pic"
                    />
                </div>
            </div>
        </div>
    )
}

export default DashboardTutor;