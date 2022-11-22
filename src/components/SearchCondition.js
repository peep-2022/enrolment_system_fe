import React, { useState } from 'react';

import '../css/SearchCondition.css';

function SearchCondition() {

    return(
        <div>
            <form>
                <div className = 'Row'>
                    <div id = 'inputfield'>
                        <div className ='Padding'>
                            <label>학과별   
                                <select>
                                    <option>대학 학과공통</option>
                                    <option>공과대학 전자공학과</option>
                                    <option>공과대학 선박해양공학과</option>
                                    <option>공과대학 토목공학과</option>
                                    <option>사범대학 교육학과</option>
                                    <option>자연과학대학 물리학과</option>
                                </select>
                            </label>
                            <label>학년별
                                <select>
                                    <option>1학년</option>
                                    <option>2학년</option>
                                    <option>3학년</option>
                                    <option>4학년</option>
                                </select>
                            </label>
                        </div>
                        <div className='Padding'>
                            <label name='professorName'>교수명
                                <input type="text"/>
                            </label>
                            <label>과목명
                                <input type="text"></input>
                            </label>
                        </div>
                        <div className='Padding'>
                            <label>학수 번호
                                <input type="text"/> - <input type="text"/>
                            </label>
                        </div>
                    </div>
                    <div id='button'>
                        <button width='300px' height='300px'>조회</button>
                    </div>
                </div>
            </form>
            <form>
                <div className='Padding'>
                    <label>학수 번호
                        <input type="text"/> - <input type="text"/>
                    </label>
                    <input type='submit' value='Submit'>
                </div>
            </form>
        </div>
    );
}

export default SearchCondition;