import Nav from "../component/Nav"
import FirstTitle from "../component/h1-2"
import { useEffect, useState } from "react";
import { getAllPokedex } from "../api/Pokedex";
import { deletePokedex } from "../api/DeletePokedex";

function Pokedex(props){
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
    <div className="pokemon-list">
        <h1>Liste des pokemons dans pokedex</h1>
        <div className="flex">
        {
            pokemon.map((pokemon,key) =>{
                return <div key={key} className="bloc-pokemon">
                    <h2>{pokemon.name}</h2>
                    <img src={pokemon.img} alt=""/>
                    <p>{pokemon.type}</p>
                    <button onClick={()=>deletePokedex(pokemon)}>relachez !</button>
                
            </div>
            })
        }
        </div>
    </div>;
</>
}

export default Pokedex;