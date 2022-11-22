import React from 'react';
import axios from 'axios';
import '../css/LoginContainer.css';
import Header from "../components/Header";

const Login = () => {
    let userId = document.getElementsByClassName('id')[0].value;
    let userPW = document.getElementsByClassName('pw')[0].value;

    function loginClick(){
        axios({
            method: 'GET',
            url: `http://127.0.0.1:8000/login?isStudent=true&userId=${userId}&userPW=${userPW}`
        }).then(response => {
            console.log(response.isSuccess)
            if (response.isSuccess == 'true'){
                sessionStorage.setItem('id', userId);
                window.location.replace("/CourseEnroll");
            }
            else{
    
            }
        })

    }
    function adminLoginClick(){
        axios({
            method: 'GET',
            url: `http://127.0.0.1:8000/login?isStudent=false&userId=${userId}&userPW=${userPW}`
        }).then(response => {
            console.log(response.isSuccess)
            if (response.isSuccess == 'true'){
                sessionStorage.setItem('id', userId);
                window.location.replace("/Admin")
            }
            else{
    
            }
        })
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