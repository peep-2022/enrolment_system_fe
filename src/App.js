import React from 'react';
import {HashRouter, Routes, Route} from "react-router-dom";
import "./App.css";

import CourseEnroll from './pages/CourseEnrollPage';
import CourseEnrollList from './pages/CourseEnrollListPage';
import Login from './pages/LoginPage';
import Admin from './pages/AdminPage';

function App() {
    return (
        <HashRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Login/>} />
                    <Route path="/CourseEnroll" element={<CourseEnroll/>} />
                    <Route path="/CourseEnrollList" element={<CourseEnrollList/>} />
                    <Route path="/Admin" element={<Admin/>} />
                </Routes>
            </div>
        </HashRouter>
    );
}

export default App;