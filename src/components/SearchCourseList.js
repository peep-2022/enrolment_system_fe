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
          <td><button onClick={() => {
            var userid = sessionStorage.getItem('id')
            var cNumer = searchlist[i]['courseNumber'];
            axios({
              method: 'GET',
              url: `http://127.0.0.1:8000/enrolment?studentNumber=${userid}&courseNumber=${cNumer}`
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
              }else if(returnCode === "OvercreditError"){
                message = "수강 가능 학점 초과입니다.";
              }else if(returnCode === "OverlimitError"){
                message = "정원 초과입니다.";
              }
              alert(`${message}`);
            })

          }}>신청</button></td>
        </tr>
        );
      } 
    }
    return reList;
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