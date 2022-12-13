import { Link } from "react-router-dom"
function Nav() {
    return <div className = "nav">
        <nav>
        <ul>
            <li><Link to="/">Pokemon</Link></li>
            <li><Link to="/Dashboard">Pokedex</Link></li>
            <li><Link to="/About">Gestionnaire</Link></li>
        </ul>
    </nav>
    </div>
}

export default Nav;