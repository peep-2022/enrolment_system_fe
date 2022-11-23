import React, { useState } from 'react';
import axios from 'axios';
import '../css/LoginContainer.css';
import Header from "../components/Header";

const Login = () => {
    const [userId, setUserId] = useState('');
    const [userPW, setUserPW] = useState('');
    
    const onIdChange = (e) => {
        setUserId(e.target.value);
    }
    const onPwChange = (e) => {
        setUserPW(e.target.value);
    }

    function loginClick(){
        axios({
            method: 'GET',
            url: `http://127.0.0.1:8000/login?isStudent=true&id=${userId}&password=${userPW}`
        }).then(response => {
            console.log(userId, userPW, response.data.isSuccess)
            if (response.data.isSuccess == 'true'){
                sessionStorage.setItem('id', userId);
                window.location.replace("/CourseEnroll");
            }
            else{
                alert("아이디/비밀번호를 다시 확인해주세요");
            }
        })

    }
    function adminLoginClick(){
        axios({
            method: 'GET',
            url: `http://127.0.0.1:8000/login?isStudent=false&id=${userId}&password=${userPW}`
        }).then(response => {
            if (response.data.isSuccess == 'true'){
                sessionStorage.setItem('id', userId);
                window.location.replace("/Admin")
            }
            else{
                alert("아이디/비밀번호를 다시 확인해주세요");
            }
        })
    }

    return(
        <div>
            <div><Header /></div>
            <div className='loginContainer'>
                <h1>로그인</h1>
                <input className='id' type="text" onChange={onIdChange} value={userId} placeholder='아이디'></input><br />
                <input className='pw' type="password" onChange={onPwChange} value={userPW} placeholder='비밀번호'></input><br /><br />
                <button className='loginBtn' onClick={loginClick}>로그인</button>
                <button className='adminLoginBtn' onClick={adminLoginClick}>관리자 로그인</button>
            </div>
        </div>
    );
};

export default Login;