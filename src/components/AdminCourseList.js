import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Modal from './UpdateCourseModal';

import '../css/CourseList.css'
import { render } from '@testing-library/react';

function AdminCourseList() {
  const [searchCourseList, setSearchCourseList] = useState([]);
  const [modal, setModal] = useState(false);

  // TODO: 요청변수 값 state?그런거로 바꾸기
  const majorName = '대학 학과공통';
  const grade = 0;
  const professorName = 'None';
  const subjectName = 'None';
  const courseNumber = 'None';


  const [_majorName, setMajorName] = useState("");
  const [_grade, setGrade] = useState("");
  const [_professorName, setProfessorName] = useState("");
  const [_subjectName, setSubjectName] = useState("");
  const [_subjectNum, setSubjectNum] = useState("");
  const [_limitNumber, setLimitNumber] = useState("");
  const [_credit, setCredit] = useState("");
  
  const updateBtnClick = (e) => {
    setModal(!modal);
    setMajorName(e.target.parentNode.parentNode.childNodes[1].innerText);
    setGrade(e.target.parentNode.parentNode.childNodes[2].innerText);
    setProfessorName(e.target.parentNode.parentNode.childNodes[5].innerText);
    setSubjectName(e.target.parentNode.parentNode.childNodes[4].innerText);
    setSubjectNum(e.target.parentNode.parentNode.childNodes[3].innerText);  //선택한 과목의 학수번호
    setLimitNumber(e.target.parentNode.parentNode.childNodes[6].innerText);
    setCredit(e.target.parentNode.parentNode.childNodes[7].innerText);  //선택한 과목의 학수번호
    
    
    // axios({
    //   method: 'GET',
    //   url: `http://127.0.0.1:8000/login?isStudent=false&id=${userId}&password=${userPW}`
    //   }).then(response => {
    //   if (response.data.isSuccess == 'true'){
    //       sessionStorage.setItem('id', userId);
    //       window.location.replace("/Admin")
    //   }
    //   else{
    //       alert("아이디/비밀번호를 다시 확인해주세요");
    //   }
    // })
  }

  const onRemove = id => {
    if(window.confirm('삭제 하시겠습니까?')) {
      setSearchCourseList(searchCourseList => 
        searchCourseList.filter(searchCourseList => searchCourseList.courseNumber !== id))
      axios({
          method: 'DELETE',
          url: `http://127.0.0.1:8000/deleteclass?courseNumber=${id}}`
      }).then(response => console.log(response.data))
    }
  };

  //검색 조건에 맞는 api 요청 
  //검색 조건 미 입력시 전체 출력됨
  useEffect(() => {
      axios({
          method: 'GET',
          url: `http://127.0.0.1:8000/search?majorName=${majorName}&grade=${grade}&professorName=${professorName}&subjectName=${subjectName}&courseNumber=${courseNumber}`
      }).then(response => setSearchCourseList(response.data))
  }, [])

  return (
    <div className="CourseList">
        {
          modal == true ? <Modal majorName={_majorName} grade={_grade} professorName={_professorName} subjectName={_subjectName} subjectNum={_subjectNum} credit={_credit} limitNumber={_limitNumber} /> : null
        }
        <div className='CourseTable'>
        <table>
            <thead>
                <tr>
                    <td>삭제</td>
                    <td>개설 학과</td>
                    <td>학년</td>
                    <td>학수 번호</td>
                    <td>과목 명</td>
                    <td>교수 명</td>
                    <td>이수 학점</td>
                    <td>제한 인원</td>
                    <td>수강 인원</td>
                    <td>선택</td>
                </tr>
            </thead>
            <tbody>
              {/* api로 받아온 리스트 만큼 표 출력함 */}
              {searchCourseList.map(searchCourseList => (
                <tr>
                  <td><button onClick={() => onRemove(searchCourseList.courseNumber)}>삭제</button></td>
                  <td>{searchCourseList.majorName}</td>
                  <td>{searchCourseList.grade}</td>
                  <td>{searchCourseList.courseNumber}</td>
                  <td>{searchCourseList.subjectName}</td>
                  <td>{searchCourseList.professorName}</td>
                  <td>{searchCourseList.credit}</td>
                  <td>{searchCourseList.limitNumber}</td>
                  <td>{searchCourseList.currentNumber}</td>
                  <td><button onClick={updateBtnClick}>수정</button></td>
                </tr>
              ))}
            </tbody>
        </table>
        </div>
    </div>
  );
}

export default AdminCourseList;