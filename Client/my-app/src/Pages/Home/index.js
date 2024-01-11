import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className='h-[100vh] bg-blue-600'>
            <div className='flex'>
                <div className='font-semibold pt-[150px] pl-[180px] flex'>
                    <p className='text-[200px] text-yellow-400'>Doubt</p>
                    <p className='text-9xl  text-yellow-400'>Share</p>
                </div>
                <div className='p-5 ml-[160px]'>
                <Link to={"/login"}><button type="button" className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full 
            text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900">
                        For Students</button></Link>
                    <Link to={"/login"}><button type="button" className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full 
            text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900">
                        For Tutors</button></Link>
                    <p className='text-xl text-yellow-400 ml-[90px]'> | Login |</p>
                </div>
            </div>
            <p className='ml-[250px] text-lg text-yellow-400'>| Learn industry-relevant skills with top tutors |</p>
            <div className='flex'>
                <div className='flex gap-2 mt-[220px] ml-[10px]'>
                    <p className='text-xl'>follow us :</p>
                    <i className="text-xl ri-facebook-circle-fill cursor-pointer"></i>
                    <i className="text-xl ri-instagram-line cursor-pointer"></i>
                    <i className="text-xl ri-twitter-fill cursor-pointer"></i>
                    <i className="text-xl ri-youtube-line cursor-pointer"></i>
                </div>
                <img
                    className='h-[250px] w-[300px] ml-[1000px] border-8 rounded-3xl border-yellow-400'
                    src='https://img.freepik.com/premium-vector/distance-learning-online-test-flat-style_7737-2127.jpg?size=626&ext=jpg' alt='pic' />
            </div>
        </div>
    )
}

export default Home;