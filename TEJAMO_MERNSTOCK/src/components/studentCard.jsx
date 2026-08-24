function studentCard ({name,age,birthday,studNum,course,section}){
    return(
        <div>
            <p>Name:          {name}</p>
            <p>Age:           {age}</p>
            <p>Birthday:      {birthday}</p>
            <p>Student Number:{studNum}</p>
            <p>Course:        {course}</p>
            <p>Section:       {section}</p>
        </div>
    ) 
}

export default studentCard;