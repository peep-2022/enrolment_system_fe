import React from 'react';
import Header from '../components/Header';
import AdminCourseList from '../components/AdminCourseList';

const Admin = () => {
    return(
        <div>
            <div>
                <Header/>
            </div>
            <div className='Mains'>
                <div id='Mains-left'>
                    <h3> Menu </h3>
                    <button>로그아웃</button>
                </div>
                <div id='Mains-right'>
                    <h2> 강의 관리 </h2>
                    <AdminCourseList/><br />
                    <b>수강신청 시간 변경 </b>
                    <input type='text'></input> - <input type='text'></input> 
                    <button>변경</button>
                </div>
            </div>
        </div>
    ); 
};
  
export default Admin;