import React from 'react';


import Home from './Pages/Home';
import Login from './Pages/Login';
import StudentRegister from './Pages/Students/StudentRegister';
import TutorRegister from './Pages/Tutors/TutorRegister';
import DashBoard from './Pages/Students/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashboardTutor from './Pages/Tutors/DashBoard';
import Doubts from './Pages/Students/Doubts';
import MySession from './Pages/Students/Session';
import Schedule from './Pages/Students/Schedule';
import Messages from './Pages/Students/Messages';
import Grades from './Pages/Students/Grades';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        
        <Route path='/tutorregister' element={<TutorRegister />} />
        <Route path='/tutor-dashboard' element={<DashboardTutor />} />

        <Route path='/studentregister' element={<StudentRegister />} />
        <Route path='/student-dashboard' element={<DashBoard />} />
        <Route path='/student-dashboard-doubts' element={<Doubts />} />
        <Route path='/student-dashboard-session' element={<MySession />} />
        <Route path='/student-dashboard-schedule' element={<Schedule/>} />
        <Route path='/student-dashboard-messages' element={<Messages />} />
        <Route path='/student-dashboard-grades' element={<Grades />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
