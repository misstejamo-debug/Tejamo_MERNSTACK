import StudentCard from "./components/studentCard.jsx"
import Subjects from "./components/subjects.jsx";
import {BrowserRouter,routes,route, Link} from "react-router-dom";

function App(){
  return(
    <div>
        <h1 class="text-3xl font-bold underline">Student Card</h1>
        <StudentCard name="Jessa" age={20} birthday="11/26/2005" studNum={202406339} course="BSIT" section="3-7" />
        <StudentCard name="Romelyn" age={21} birthday="11/26/2004" studNum={202403003} course="BSIT" section="3-7" />
        <StudentCard name="Maryrose" age={20} birthday="3/24/2006" studNum={202400695} course="BSIT" section="3-7" />

        <h1 class="text-3xl font-bold underline">Subject</h1>
        <Subjects schedCode={123123} subName="DCIT26" classSched={20001234}/>
    </div>
  )
}

export default App;
