function subjects ({schedCode,subName,classSched}){
    return(
        <div>
            <p>Schedule Code:          {schedCode}</p>
            <p>Name of Subject:           {subName}</p>
            <p>Class schedule:      {classSched}</p>
        </div>
    ) 
}

export default subjects;