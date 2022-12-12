import Nav from "../component/Nav"
import FirstTitle from "../component/h1-2"
import { useEffect, useState } from "react";
import { getAllPokedex } from "../api/Pokedex";

function Dashboard(props){
    //va s'executer seulement au lancement du composant (dep: [])
    const [ pokemon, setPokemon ] = useState([]);

    //va s'executer seulement au lancement du composant (dep: [])
    useEffect(() => {
      // récupérer la liste des users seulement au chargement du composant ! 
      const pokemonFetched = getAllPokedex();
      pokemonFetched
        .then(result => setPokemon(result))
        .catch(error=>console.error("Erreur avec notre API :",error.message));
    },[]);
    return <>
    <Nav/>
    <FirstTitle/>
    <div className="pokemon-pokedex">
        <h1>Liste des pokemons dans pokedex</h1>
        <div className="flex">
        {
            pokemon.map((pokemon,key) =>{
                return <div key={key} className="bloc-pokemon">
                    <h2>{pokemon.name}</h2>
                
            </div>
            })
        }
        </div>
    </div>;
</>
}

export default Dashboard;