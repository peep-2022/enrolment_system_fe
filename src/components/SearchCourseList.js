import axios from 'axios';
import React, { useState, useEffect } from 'react';

import '../css/CourseList.css'

function SearchCourseList() {

  const [searchCourseList, setSearchCourseList] = useState([]);
    
  // TODO: 요청변수 값 state?그런거로 바꾸기
  const majorName = "";
  const grade = "";
  const professorName = "";
  const subjectName = "";
  const courseNumber = "";

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
              {/* api로 받아온 리스트 만큼 표 출력함 */}
              {searchCourseList.map(searchCourseList => (
                <tr>
                  <td></td>
                  <td>{searchCourseList.majorName}</td>
                  <td>{searchCourseList.grade}</td>
                  <td>{searchCourseList.courseNumber}</td>
                  <td>{searchCourseList.subjectName}</td>
                  <td>{searchCourseList.professorName}</td>
                  <td>{searchCourseList.credit}</td>
                  <td>{searchCourseList.limitNumber}</td>
                  <td>{searchCourseList.currentNumber}</td>
                  <td><button>신청</button></td>
                </tr>
              ))}
            </tbody>
        </table>
    </div>
  );
}

export default SearchCourseList;