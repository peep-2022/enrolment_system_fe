import React, { useState } from 'react';
import '../css/Modal.css'

function Modal(props){
    const [modal, setModal] = useState(true);
    function updateBtnClick(){
        setModal(!modal);

        var oldCourseNum = props.subjectNum;
        var newCourseNum = `${subjectNumberA}-${subjectNumberB}-${classNumber}`

        if(subjectName === ''){
            subjectName = props.subjectName;
        }
        if(majorName === ''){
            majorName = props.majorName;
        }
        if(grade === ''){
            grade = props.grade;
        }
        if(professorName === ''){
            professorName = props.professorName;
        }
        if(credit === ''){
            credit = props.credit;
        }
        if(limitNumber === ''){
            limitNumber = props.limitNumber;
        }

        alert(`해당 과목의 정보를 학과명 : ${majorName}, 학년별: ${grade}, 교수명: ${professorName}, 과목명: ${subjectName}, 학수 번호: ${subjectNumberA}-${subjectNumberB}-${classNumber}로 변경하시겠습니까?`);
        
        // axios({
        //     method: 'GET',
        //     url: `http://127.0.0.1:8000/editclass?oldCourseNum=${oldCourseNum}&newCourseNum=${newCourseNum}&subjectName=${subjectName}&limitNumber=${limitNumber}&grade=${grade}&credit=${credit}&professorName=${professorName}&majorName=${majorName}`
        // }).then((response) => {setSearchCourseList(response.data)});
    
    }

    function cancelBtnClick(){
        setModal(!modal);
    }

    var [professorName, setProfessorName] = useState("");
    var [subjectName, setSubjectName] = useState("");
    var [subjectNumberA, setSubjectNumberA] = useState("");
    var [subjectNumberB, setSubjectNumberB] = useState("");
    var [classNumber, setClassNumber] = useState("");
    var [majorName, setMajorName] = useState("");
    var [grade, setGrade] = useState("");
    var [limitNumber, setLimitNumber] = useState("");
    var [credit, setCredit] = useState("");



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
    const handleChangeLN = (event) => {
        setLimitNumber(event.target.value);
    };
    const handleChangeCr = (event) => {
        setCredit(event.target.value);
    };


    return(
        <div>
        {modal == true ?
            <div id='modal' className='modalContainer'>
            <h2>강의 수정</h2>
            <label>학과별
                <select placeholder={props.majorName} value={majorName} onChange={handleChangeMN}>
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
                <select placeholder={props.grade} value={grade} onChange={handleChangeG}>
                    <option value="notValue">학년 선택</option>
                    <option value="1">1학년</option>
                    <option value="2">2학년</option>
                    <option value="3">3학년</option>
                    <option value="4">4학년</option>
                </select>
            </label>
            
            
            <br />
            <label name='professorName'>교수명
                <input type="text" placeholder={props.professorName} value={professorName} onChange={handleChangePN} />
            </label>
            <label>과목명
                <input type="text" placeholder={props.subjectName} value={subjectName} onChange={handleChangeSN}></input>
            </label>
            <br />
            <label name='limitNumber'>학점
                <input type="number" placeholder={props.limitNumber} value={limitNumber} onChange={handleChangeLN} />
            </label>
            <label>제한 인원
                <input type="number" placeholder={props.credit} value={credit} onChange={handleChangeCr}></input>
            </label>
            <br />
            <label>학수 번호
                <input type="number" value={subjectNumberA} onChange={handleChangeSNuA} /> -  <input type="number" value={subjectNumberB} onChange={handleChangeSNuB} /> - <input type="number" value={classNumber} onChange={handleChangeCN} />
            </label>
            <button onClick={updateBtnClick}>수정</button>
            <button onClick={cancelBtnClick}>취소</button>
            </div>
            : null}
        </div>
    );
};

export default Modal