import StudentData from "../data/studentData";
import { useParams } from "react-router-dom";

export default function StudentDetails(){

const { id } = useParams();

const student = students.find((student) => String(student.id) === String(id));

if(!student) {
    return <div>Student not found!</div>
}

return(
    <div className="flex flex-col items-center justify h-screen bg-pink-300">
        <h2>All details of {student.name}</h2>
        <p>Student Name: {student.name}</p>
        <p>Student Number: {student.studentNumber}</p>
        <p>Course: {student.course}</p>
        <p>Section: {student.section}</p>
        <p>Email: {student.email}</p>
    </div>
);
}