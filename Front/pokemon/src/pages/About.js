import Nav from "../component/Nav"
import FirstTitle from "../component/h1"
import { useEffect, useState } from "react";
import { getAll } from "../api/Pokemon";
import {deletePokemon} from "../api/DeletePokemon";
import {updatePokemon} from "../api/UpdatePokemon";


function About(props){

    
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
                    <img src={pokemon.img} alt=""/>
                    <h2>{pokemon.name}</h2>

                    <textarea className="update" placeholder="Modifier le nom"></textarea> 
                    <button onClick={()=>updatePokemon(pokemon)}>Modifier !</button>
                    <p>{pokemon.type}</p>
                    <button onClick={()=>deletePokemon(pokemon)}>Supprimer !</button>
                <ul>
                    
                </ul>
            </div>
            })
        }
        </div>
    </div>;

    </>

}


export default About;