import Nav from "../component/Nav"
import FirstTitle from "../component/h1"
import { useEffect, useState } from "react";
import { getAll } from "../api/Pokemon";
import {getInPokedex} from "../api/AddToPokedex";


function Pokemon(props){

    
    //va s'executer seulement au lancement du composant (dep: [])
    const [ pokemon, setPokemon ] = useState([]);

    //va s'executer seulement au lancement du composant (dep: [])
    useEffect(() => {
      // récupérer la liste des users seulement au chargement du composant ! 
      const pokemonFetched = getAll();
      pokemonFetched
        .then(result => setPokemon(result))
        .catch(error=>console.error("Erreur avec notre API :",error.message));
    },[]);
    return <>
    <Nav/>
    <FirstTitle/>
    <div className="pokemon-list">
        <h1>Liste des pokemons</h1>
        <div className="flex">
        {
            pokemon.map((pokemon,key) =>{
                return <div key={key} className="bloc-pokemon">
                    <h2>{pokemon.name}</h2>
                    <img src={pokemon.img} alt=""/>
                    <p>{pokemon.type}</p>
                    <button onClick={()=>getInPokedex(pokemon)}>Capturer !</button>
                <ul>
                    
                </ul>
            </div>
            })
        }
        </div>
    </div>;

    </>

}


export default Pokemon;