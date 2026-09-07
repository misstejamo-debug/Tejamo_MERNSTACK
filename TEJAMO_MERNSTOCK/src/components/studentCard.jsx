function studentCard ({id,name,age,birthday,studNum,course,section}){
    return(
        <div>
            <p>ID:            {id}</p>
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