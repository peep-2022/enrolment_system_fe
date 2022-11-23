import axios from 'axios';
import React, { useState, useEffect, useInsertionEffect } from 'react';

import '../css/CourseEnrollPage.css'
import '../css/SearchCondition.css';

import Header from '../components/Header';
import Menu from '../components/Menu';
import SearchCourseList from '../components/SearchCourseList';
import userEvent from '@testing-library/user-event';

const CourseEnroll = () => {

    var [searchCourseList, setSearchCourseList] = useState([]);
    //사용자 입력 변수 
    var [professorName, setProfessorName] = useState("");
    var [subjectName, setSubjectName] = useState("");
    var [subjectNumberA, setSubjectNumberA] = useState("");
    var [subjectNumberB, setSubjectNumberB] = useState("");
    var [classNumber, setClassNumber] = useState("");
    var [majorName, setMajorName] = useState("");
    var [grade, setGrade] = useState("");


    const handleChangePN = (event) => {
        setProfessorName(event.target.value);
    };
    const handleChangeSN = (event) => {
        setSubjectName(event.target.value);
    };
    const handleChangeSNuA = (event) => {
        setSubjectNumberA(event.target.value);
    };
    const handleChangeSNuB = (event) => {
        setSubjectNumberB(event.target.value);
    };
    const handleChangeCN = (event) => {
        setClassNumber(event.target.value);
    };
    const handleChangeMN = (event) => {
        setMajorName(event.target.value);
    };
    const handleChangeG = (event) => {
        setGrade(event.target.value);
    };


    function getData ()   {
        var courseNumber = `${subjectNumberA}-${subjectNumberB}-${classNumber}`;

        if(majorName === "") {
            majorName = "대학 학과공통";
        }
        if(grade === "") {
            grade = "0";
        }
        if(professorName === "") {
            professorName = "None";
        }
        if(subjectName === "") {
            subjectName = "None";
        }
        if(courseNumber === "--") {
            courseNumber="None";
        }

        axios({
            method: 'GET',
            url: `http://127.0.0.1:8000/search?majorName=${majorName}&grade=${grade}&professorName=${professorName}&subjectName=${subjectName}&courseNumber=${courseNumber}`
        }).then((response) => {
            setSearchCourseList(response.data);
        }
        )

    }

    useEffect(() => {
        var courseNumber = `${subjectNumberA}-${subjectNumberB}-${classNumber}`;

        if(majorName === "") {
            majorName = "대학 학과공통";
        }
        if(grade === "") {
            grade = "0";
        }
        if(professorName === "") {
            professorName = "None";
        }
        if(subjectName === "") {
            subjectName = "None";
        }
        if(courseNumber === "--") {
            courseNumber="None";
        }

        axios({
            method: 'GET',
            url: `http://127.0.0.1:8000/search?majorName=${majorName}&grade=${grade}&professorName=${professorName}&subjectName=${subjectName}&courseNumber=${courseNumber}`
        }).then((response) => {setSearchCourseList(response.data);

    })
    },[]);


    return (
        <div>
            <div>
                <Header />
            </div>
            <div className='Mains'>
                <div id='Mains-left'>
                    <h3> Menu </h3>
                    <Menu />
                </div>
                <div id='Mains-right'>
                    <h2> 수강 신청</h2>
                    <div>
                        <div>
                            <div className='Row'>
                                <div id='inputfield'>
                                    <div className='Padding'>
                                        <label>학과별
                                            <select value={majorName} onChange={handleChangeMN}>
                                                <option value="notValue">학과 선택</option>
                                                <option value="대학 학과공통">대학 학과공통</option>
                                                <option value="공과대학 전자공학과">공과대학 전자공학과</option>
                                                <option value="공과대학 선박해양공학과">공과대학 선박해양공학과</option>
                                                <option value="공과대학 토목공학과">공과대학 토목공학과</option>
                                                <option value="사범대학 교육학과">사범대학 교육학과</option>
                                                <option value="자연과학대학 물리학과">자연과학대학 물리학과</option>
                                            </select>
                                        </label>
                                        <label>학년별
                                            <select value={grade} onChange={handleChangeG}>
                                                <option value="notValue">학년 선택</option>
                                                <option value="1">1학년</option>
                                                <option value="2">2학년</option>
                                                <option value="3">3학년</option>
                                                <option value="4">4학년</option>
                                            </select>
                                        </label>
                                    </div>
                                    <div className='Padding'>
                                        <label name='professorName'>교수명
                                            <input type="text" value={professorName} onChange={handleChangePN} />
                                        </label>
                                        <label>과목명
                                            <input type="text" value={subjectName} onChange={handleChangeSN}></input>
                                        </label>
                                    </div>
                                    <div className='Padding'>
                                        <label>학수 번호
                                            <input type="number" value={subjectNumberA} onChange={handleChangeSNuA} /> -  <input type="number" value={subjectNumberB} onChange={handleChangeSNuB} /> - <input type="number" value={classNumber} onChange={handleChangeCN} />
                                        </label>
                                    </div>
                                </div>
                                <div id='button'>
                                    <button onClick={getData}>조회</button>
                                </div>
                            </div>
                        </div>
                        <form>
                            <div className='Padding'>
                                <label>학수 번호
                                    <input type="number" value={subjectNumberA} onChange={handleChangeSNuA} /> -  <input type="number" value={subjectNumberB} onChange={handleChangeSNuB} /> - <input type="number" value={classNumber} onChange={handleChangeCN} />
                                </label>
                                <button onClick={() => {
                                    var userid = sessionStorage.getItem('id')
                                    var courseNumber = `${subjectNumberA}-${subjectNumberB}-${classNumber}`;
                                    
                                    axios({
                                    method: 'GET',
                                    url: `http://127.0.0.1:8000/enrolment?studentNumber=${userid}&courseNumber=${courseNumber}`
                                    }).then((response) => {
                                    var returnCode = response.data.returnCode;
                                    console.log(returnCode);
                                    var message = "";
                                    if(returnCode === "Success") {
                                        message = "수강 신청 성공했습니다!";
                                    }else if(returnCode === "AlreadyAppliedError"){
                                        message = "이미 수강신청한 과목입니다.";
                                    }else if(returnCode === "TimeError"){
                                        message = "수강 신청 가능 시간이 지났습니다.";
                                    }else if(returnCode === "AlreadyAppliedSubjectError"){
                                        message = "다른 분반 신청했습니다..";
                                    }else if(returnCode === "AlreadyAppliedError"){
                                        message = "이미 수강신청한 과목입니다.";
                                    }
                                    alert(`${message}`);
                                    })

                                }}>신청</button>
                            </div>
                        </form>
                    </div>
                    <SearchCourseList list={searchCourseList} />
                </div>
            </div>
        </div>
    );
};

export default CourseEnroll;