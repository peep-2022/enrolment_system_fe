import React from 'react';
import '../css/LoginContainer.css';
import Header from "../components/Header";

const Login = () => {
    function loginClick(){
        window.location.replace("/CourseEnroll")
    }
    function adminLoginClick(){
        window.location.replace("/Admin")
    }
    return(
        <div>
            <div><Header /></div>
            <div className='loginContainer'>
                <h1>로그인</h1>
                <input className='id' type="text" placeholder='아이디'></input><br />
                <input className='pw' type="password" placeholder='비밀번호'></input><br /><br />
                <button className='loginBtn' onClick={loginClick}>로그인</button>
                <button className='adminLoginBtn' onClick={adminLoginClick}>관리자 로그인</button>
            </div>
        </div>
    );
};

export default Login;