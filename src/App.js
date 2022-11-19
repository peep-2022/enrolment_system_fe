import { useState } from 'react';
import './App.css';
import Course from './components/Course';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  let userName = "yj" //관리자 이름
  let [course, setCourse] = useState([]); //수업 목록
  return (
    <div className="App">
      <div className="adminInfo">
        <span>{userName}</span>님 <button>로그아웃</button>
      </div>
      <div className='courseList'>
        <table className='courseTable' class="table table-bordered table-hover">
          <thead>
            <th></th>
            <th>과목명</th>
            <th>대상학년</th>
            <th>과목번호</th>
            <th>분반</th>
            <th>개설학과</th>
            <th>수강정원</th>
            <th>학점/시수</th>
            <th>담당교수</th>
          </thead>
          <tbody>
            <Course subjectName="subjectName" grade="grade" subjectNumber="subjectNumber" classNumber="classNumber" majorName="majorName" limitNumber="limitNumber" credit="credit" professorName ="professorName" />
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
