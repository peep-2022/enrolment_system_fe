import React from 'react';
import { Link } from "react-router-dom";

const Menu = () => {
    function logoutClick(){
        sessionStorage.clear();
        window.location.replace("/");
    }

    return(
        <div>
            <div>
                <Link to="/CourseEnroll">수강 신청 강의 목록 확인</Link>
                <br/>
                <Link to="/CourseEnrollList">수강 신청 내역 조회</Link>
                <br/><br/>
                <button onClick={logoutClick}>로그아웃</button>
            </div>
        </div>
    )
}

export default Menu