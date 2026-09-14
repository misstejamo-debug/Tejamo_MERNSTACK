import StudentCard from "../components/studentCard";
import studentData from "../data/studentData.json";

export default function studentList(){
    return(
        <div className="flex flex-col items-center justify h-screen bg-pink-300">
            <h1 className="text-center text-2xl font-bold mb-4 text-black">Student List</h1>
            <p className="text-black">This is the Student List page.</p>
            <div className="grid grid-cols-3 gap-4 text-pink-500">
                {studentData.map((student)=> ( 
                    <StudentCard key={student.id}
                                student={student}
                    />
                ))}
            </div>
        </div>
    )
}