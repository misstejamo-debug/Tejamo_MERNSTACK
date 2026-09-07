import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

export default function NavBar(){
return(
    <BrowserRouter>
        <nav>
            <Link to ="/students/{id}">View Details</Link>
        </nav>
    </BrowserRouter>
)
}