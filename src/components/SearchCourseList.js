import axios from 'axios';
import React, { useState, useEffect } from 'react';

import '../css/CourseList.css'

function SearchCourseList(searchCourseList) {

  const tableList = () => {

    var searchlist = searchCourseList['list']
    
    const reList = [];
    if(typeof(searchlist[0]) != 'undefined') {
      for(let i = 0; i < searchlist.length; i++) {
        reList.push(
          <tr>
          <td></td>
          <td>{searchlist[i]['majorName']}</td>
          <td>{searchlist[i]['grade']}</td>
          <td>{searchlist[i]['courseNumber']}</td>
          <td>{searchlist[i]['subjectName']}</td>
          <td>{searchlist[i]['professorName']}</td>
          <td>{searchlist[i]['credit']}</td>
          <td>{searchlist[i]['limitNumber']}</td>
          <td>{searchlist[i]['currentNumber']}</td>
          <td><button onClick={requestEnrolmentAPI}>신청</button></td>
        </tr>
        );
      } 
    }
    return reList;
  }

  function requestEnrolmentAPI(){
    axios({
      method: 'GET',
      url: `http://127.0.0.1:8000/enrolment?studentNumber=${majorName}&grade=${grade}&professorName=${professorName}&subjectName=${subjectName}&courseNumber=${courseNumber}`
    }).then((response) => {
    })
  }

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
              {tableList()}
            </tbody>
        </table>
    </div>
  );
}

export default SearchCourseList;