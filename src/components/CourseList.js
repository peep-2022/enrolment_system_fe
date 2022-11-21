import '../css/CourseList.css'
import axios from 'axios';
import React, { useState, useEffect } from 'react';

function CourseList({courselist}) {

  const [ApplyCourseList, setApplyCourseList] = useState([]);
  const userid = '201902671'

  useEffect(() => {
      axios({
          method: 'GET',
          url: `http://127.0.0.1:8000/showEnrolmentList?studentNumber=${userid}`
      }).then(response => setApplyCourseList(response.data))
  }, [])

  const onRemove = id => {
    if(window.confirm('삭제 하시겠습니까?')) {
      setApplyCourseList(ApplyCourseList => 
        ApplyCourseList.filter(ApplyCourseList => ApplyCourseList.courseNumber !== id))
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
              {ApplyCourseList.map(ApplyCourseList => (
                <tr>
                  <td></td>
                  <td>{ApplyCourseList.majorName}</td>
                  <td>{ApplyCourseList.grade}</td>
                  <td>{ApplyCourseList.courseNumber}</td>
                  <td>{ApplyCourseList.subjectName}</td>
                  <td>{ApplyCourseList.professorName}</td>
                  <td>{ApplyCourseList.credit}</td>
                  <td>{ApplyCourseList.limitNumber}</td>
                  <td>{ApplyCourseList.currentNumber}</td>
                  <td><button onClick={() => onRemove(ApplyCourseList.courseNumber)}>삭제</button></td>
                </tr>
              ))}
            </tbody>
        </table>
    </div>
  );
}

export default CourseList;