import React from 'react';
import { Link } from "react-router-dom";

const Menu = () => {
    return(
        <div>
            <div>
                <Link to="/">수강 신청 강의 목록 확인</Link>
                <br/>
                <Link to="/CourseEnrollList">수강 신청 내역 조회</Link>
            </div>
        </div>
    )
}

export default Menu