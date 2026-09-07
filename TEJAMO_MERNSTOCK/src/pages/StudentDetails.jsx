import students from "../data/student";
import {BrowserRouter,routes,route, Link} from "react-router-dom";
export default function StudentDetails(){

const {id} = useParams();
const studentId =parseInt(id);

const student = students.find(
(student)=>student.id === ParseInt(id)
);

if(!student) {
    return <h2>Student not found!</h2>
}

return(
    <div>
        <h2>All details of {student.name}</h2>
        <p><b>ID</b>{student.id}</p>
        <p><b>Age</b>{student.age}</p>

        <Link to="/students">
        <button>
            Leave
        </button>
        </Link>
    </div>
);
}