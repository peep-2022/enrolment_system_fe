import React from 'react';
import '../css/CourseEnrollPage.css'

import Header from '../components/Header';
import Menu from '../components/Menu';
import SearchCondition from '../components/SearchCondition';
import SearchCourseList from '../components/SearchCourseList';

const CourseEnroll = () => {
    return(
        <div>
            <div>
                <Header/>
            </div>
            <div className='Mains'>
                <div id='Mains-left'>
                    <h3> Menu </h3>
                    <Menu/>
                </div>
                <div id='Mains-right'>
                    <h2> 수강 신청</h2>
                    <SearchCondition/>
                    <SearchCourseList/>
                </div>
            </div>
        </div>
    );
};

  
export default CourseEnroll;