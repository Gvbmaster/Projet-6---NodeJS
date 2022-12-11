import Nav from "../component/Nav"
import FirstTitle from "../component/h1"
import { useEffect, useState } from "react";
import { getAll } from "../api/pokemon";


function Home(props){

    
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
    <Nav />
    <FirstTitle />
    <div className="pokemon-list">
        <h1>Liste des pokemons</h1>
        <div class="flex">
        {
            pokemon.map((list,key) =>{
                return <div key={key} className="bloc-pokemon">
                {/* <img className="avatar" src={pokemon.img} /> /}
                <div class="pokemonCard">
                <div class="number">
                <h2>{pokemonName.number}</h2>
                </div>
                <div class="name">
                <p>{pokemonName.name}</p>
                </div>
                <div class="type">
                <p>{pokemonName.type}</p>
                </div>
                </div>
            {/ <button onClick={()=>addToPokedex(pokemon._id)}>Capturer !</button> */}
            </div>
            })
        }
        </div>
    </div>;

    </>

}


export default Home;