import "./App.css";
import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import CourseApplyList from './pages/CourseApplyListPage';
import Main from './pages/Main';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/CourseApplyList" element={<CourseApplyList />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;