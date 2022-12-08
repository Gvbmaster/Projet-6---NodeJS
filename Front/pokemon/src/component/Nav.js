import { Link } from "react-router-dom"
function Nav() {
    return <nav>
        <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Dashboard">Dashboard</Link></li>
        </ul>
    </nav>
}

export default Nav;