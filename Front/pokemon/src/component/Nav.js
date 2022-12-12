import { Link } from "react-router-dom"
function Nav() {
    return <div className = "nav">
        <nav>
        <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Dashboard">Dashboard</Link></li>
        </ul>
    </nav>
    </div>
}

export default Nav;