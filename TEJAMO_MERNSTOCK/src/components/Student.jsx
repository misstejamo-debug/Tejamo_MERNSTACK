import { Link } from "react-router-dom";
import student from "./student.json"
import studentCard from "./studentCard.jsx"
export default function student ({student}) {
    return( 
        <div>
            <h3>{student.name}</h3>
            <p>Student no. {student.studentNumber}</p>
            <p>Course: {student.course}</p>
            <Link to={`/students/${student.id}`}>
                <button>
                    View
                </button>
                </Link>
        </div>
    );
}



