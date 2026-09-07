import studentsData from "../data/students.json";
import Students from "../components/Student";

export default function Students() {
    return(
        <div>
            <h2>
                Student List
            </h2>
                <div>
                    {studentsData.map((student)=>(
                        <student Key={student.id} student={student} />
                    ))}
                </div>
            <p></p>
        </div>
    )
}