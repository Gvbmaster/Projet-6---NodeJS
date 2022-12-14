import { Link } from "react-router-dom"
function Nav() {
    return <div className = "nav">
        <nav>
        <ul>
            <li><Link to="/">Pokemon</Link></li>
            <li><Link to="/pokedex">Pokedex</Link></li>
            <li><Link to="/gestion">Gestionnaire</Link></li>
        </ul>
    </nav>
    </div>
}

export default Nav;