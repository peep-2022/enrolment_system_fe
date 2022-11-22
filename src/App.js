import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";

import CourseEnroll from './pages/CourseEnrollPage';
import CourseEnrollList from './pages/CourseEnrollListPage';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<CourseEnroll/>} />
                    <Route path="/CourseEnrollList" element={<CourseEnrollList/>} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;