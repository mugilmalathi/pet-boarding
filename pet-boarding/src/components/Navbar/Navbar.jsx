import { Link } from "react-router-dom"
import "./Navbar.css"

export const Navbar = ()=>{

    return (
        <div id="navbar">
            <button id="nav-but1" className="navbut"><Link to="/">Home</Link></button>
            <button id="nav-but2" className="navbut"><Link to="/create">Create Pets</Link></button>
            <button className="navbut"><Link to="/login">Login</Link></button>
        </div>
    )
}