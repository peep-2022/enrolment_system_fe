import React from 'react';

import Header from '../components/Header';
import Menu from '../components/Menu';
import AppliedCourseList from '../components/AppliedCourseList';

const CourseEnrollList = () => {
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
                    <h2> 수강 신청 내역 조회 </h2>
                    <AppliedCourseList/>
                </div>
            </div>
        </div>
    ); 
};

  
export default CourseEnrollList;