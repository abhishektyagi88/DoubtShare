import React, { useEffect } from "react";
import { GetStudent } from "../../ApiCalls/students";
import { useDispatch, useSelector } from "react-redux"
import { message } from 'antd';
import { setUser } from "../../Redux/usersSlice";
import { useNavigate, Link } from 'react-router-dom';

function DashBoard() {
    const { user } = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const getData = async () => {
        try {
            const response = await GetStudent();
            if (response.success) {
                dispatch(setUser(response.data));
            } else {
                dispatch(setUser(null));
                localStorage.removeItem("token");
                navigate("/login");
                message.error(response.message);
            }
        } catch (err) {
            dispatch(setUser(null));
            message.error(err.message);
        }
    }

    useEffect(() => {
        if (localStorage.getItem("token")) {
            getData();
        } else {
            navigate("/login");
        }
    }, []);

    return (
        user && (
            <div className="h-[100vh] bg-gray-900">
                <div className="flex justify-between">
                    <div className='font-semibold pt-[10px] pl-[10px] flex'>
                        <p className='text-[80px] text-orange-600'>Doubt</p>
                        <p className='text-4xl  text-orange-600'>Share</p>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex mr-6 mt-4 gap-3 text-2xl text-orange-600 font-bold">
                            <i className="text-red-500 ri-shield-star-fill"></i>
                            <p>Welcome {user.name}</p>
                        </div>
                        <p className="text-center text-xl text-orange-600 font-bold cursor-pointer"
                            onClick={() => {
                                localStorage.removeItem("token");
                                navigate("/login");
                            }}
                        >Logout <i className="ri-logout-circle-r-line"></i></p>
                    </div>
                </div>
                <div className="flex gap-[90px]">
                    <div className="flex flex-col gap-10 h-[540px] w-[230px] ml-4 mt-3 rounded-xl text-xl font-bold bg-orange-600">
                    <p className="mt-10 ml-3 border-l-2 border-blue-600 rounded-sm cursor-pointer bg-gray-900 hover:scale-110 duration-300 text-orange-600"><i class="text-3xl p-1  ri-dashboard-3-line"></i>My Dashboard</p>
                    <Link to={"/student-dashboard-session"}><p className="mt-3 ml-3 border-l-2 border-blue-600 rounded-sm cursor-pointer hover:bg-gray-900 hover:scale-110 duration-300"><i className="p-1 text-3xl ri-direction-fill"></i>Ongoing Sessions</p></Link>
                    <Link to={"/student-dashboard-doubts"}><p className="mt-3 ml-3 border-l-2 border-blue-600 rounded-sm cursor-pointer hover:bg-gray-900 hover:scale-110 duration-300 "><i className="text-3xl p-1  ri-book-read-line"></i>Doubts</p></Link>
                    <Link to={"/student-dashboard-grades"}><p className="mt-3 ml-3 border-l-2 border-blue-600 rounded-sm cursor-pointer hover:bg-gray-900 hover:scale-110 duration-300"><i className="text-3xl p-1 ri-star-fill"></i>My Grades</p></Link>
                    <Link to={"/student-dashboard-schedule"}><p className="mt-3 ml-3 border-l-2 border-blue-600 rounded-sm cursor-pointer hover:bg-gray-900 hover:scale-110 duration-300"><i className="text-3xl p-1 ri-calendar-schedule-fill "></i>Schedule</p></Link>
                    <Link to={"/student-dashboard-messages"}><p className="mt-3 ml-3 border-l-2 border-blue-600 rounded-sm cursor-pointer hover:bg-gray-900 hover:scale-110 duration-300"><i className="text-3xl p-1  ri-chat-1-line"></i>Messages</p></Link>
                    </div>
                    <div className="border-4 border-orange-600 w-[1180px] h-[540px] mt-3 rounded-xl text-4xl text-orange-600 font-semibold">
                        My DashBoard
                    </div>
                </div>

            </div>
        )
    )
}

export default DashBoard;