import '../css/CourseList.css'
import axios from 'axios';
import React, { useState, useEffect } from 'react';

function AppliedCourseList() {

  const [appliedCourseList, setAppliedCourseList] = useState([]);
  
  //TODO: 현재 로그인한 사용자의 학번으로 바꾸기
  const userid = '201902671'

  useEffect(() => {
      axios({
          method: 'GET',
          url: `http://127.0.0.1:8000/showEnrolmentList?studentNumber=${userid}`
      }).then(response => setAppliedCourseList(response.data))
  }, [])

  const onRemove = id => {
    if(window.confirm('삭제 하시겠습니까?')) {
      setAppliedCourseList(appliedCourseList => 
        appliedCourseList.filter(appliedCourseList => appliedCourseList.courseNumber !== id))
      axios({
          method: 'DELETE',
          url: `http://127.0.0.1:8000/dropClass?studentNumber=${userid}&courseNumber=${id}`
      }).then(response => console.log(response.data))
    }
  };

  return (
    <div className="CourseList">
        <table>
            <thead>
                <tr>
                    <td>No</td>
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
              {appliedCourseList.map(appliedCourseList => (
                <tr>
                  <td></td>
                  <td>{appliedCourseList.majorName}</td>
                  <td>{appliedCourseList.grade}</td>
                  <td>{appliedCourseList.courseNumber}</td>
                  <td>{appliedCourseList.subjectName}</td>
                  <td>{appliedCourseList.professorName}</td>
                  <td>{appliedCourseList.credit}</td>
                  <td>{appliedCourseList.limitNumber}</td>
                  <td>{appliedCourseList.currentNumber}</td>
                  <td><button onClick={() => onRemove(appliedCourseList.courseNumber)}>삭제</button></td>
                </tr>
              ))}
            </tbody>
        </table>
    </div>
  );
}

export default  AppliedCourseList;