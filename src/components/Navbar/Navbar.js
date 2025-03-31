import styles from "./NavbarStyles.css"
import {Link} from "react-router-dom";
import Contact from "../Contact/Contact";

const Navbar = () => {
    return <nav className="nav">
        <ul className="nav-list">
            <li className="nav-item">
                <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link to="/about">About me</Link>
            </li>
            <li className="nav-item">
                <Link to="/skills">Skills</Link>
            </li>
            <li className="nav-item">
                <Link to="/projects">Projects</Link>
            </li>
        </ul>
        <Contact />
    </nav>
}

export default Navbar;
