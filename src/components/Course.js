import propTypes from "prop-types";

function Course({ subjectName, grade, subjectNumber, classNumber, majorName, limitNumber, credit, professorName }) {
    return (
        <tr>
            <td>
                <button>수정</button>
            </td>
            <td>
                {subjectName}
            </td>
            <td>
                {grade}
            </td>
            <td>
                {subjectNumber}
            </td>
            <td>
                {classNumber}
            </td>
            <td>
                {majorName}
            </td>
            <td>
                {limitNumber}
            </td>
            <td>
                {credit}
            </td>
            <td>
                {professorName}
            </td>
        </tr>
    );
}

// Movie.propTypes = {
//     id: propTypes.number.isRequired,
//     coverImg: propTypes.string.isRequired,
//     title: propTypes.string.isRequired,
//     summary: propTypes.string,
//     genres: propTypes.arrayOf(propTypes.string).isRequired,
// };

export default Course;