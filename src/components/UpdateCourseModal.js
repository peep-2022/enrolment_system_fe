import React, { useState } from 'react';
import '../css/Modal.css'

function Modal(props){
    const [modal, setModal] = useState(true);
    function updateBtnClick(){
        setModal(!modal);
    }
    function cancelBtnClick(){
        setModal(!modal);
    }
    return(
        <div>
        {modal == true ?
            <div id='modal' className='modalContainer'>
            <h2>강의 수정</h2>
            학과별
            <select placeholder={props.majorName}>
                <option>대학 학과공통</option>
                <option>공과대학 전자공학과</option>
                <option>공과대학 선박해양공학과</option>
                <option>공과대학 토목공학과</option>
                <option>사범대학 교육학과</option>
                <option>자연과학대학 물리학과</option>
            </select>
            학년별
            <select placeholder={props.grade}>
                <option>1학년</option>
                <option>2학년</option>
                <option>3학년</option>
                <option>4학년</option>
            </select><br />
            교수명 <input type='text' placeholder={props.professorName}></input>
            과목명 <input type='text' placeholder={props.subjectName}></input>
            <br />
            학수번호 <input type="text" placeholder={props.subjectNum}></input>
            <button onClick={updateBtnClick}>수정</button>
            <button onClick={cancelBtnClick}>취소</button>
            </div>
            : null}
        </div>
    );
};

export default Modal