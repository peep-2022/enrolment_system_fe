import React from 'react';

import Header from '../components/Header';
import SearchCourseList from '../components/SearchCourseList';

const Admin = () => {
    return(
        <div>
            <div>
                <Header/>
            </div>
            <div className='Mains'>
                <div>
                    <h2> 수강 신청</h2>
                    <SearchCourseList/>
                </div>
            </div>
        </div>
    );
};

  
export default Admin;