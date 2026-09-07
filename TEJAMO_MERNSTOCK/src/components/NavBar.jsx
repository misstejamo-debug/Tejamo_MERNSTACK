import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

export default function NavBar(){
return(
    <BrowserRouter>
        <nav>
            <Link to ="/pages/Home">Home</Link>
            <Link to="/students" style="">Students</Link>
        </nav>
    </BrowserRouter>
)
}