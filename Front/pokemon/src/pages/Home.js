import Nav from "../component/Nav"
import FirstTitle from "../component/h1"
import { useEffect, useState } from "react";
import { getAll } from "../api/pokemon";


function Home(props){
    const [ Pokemon, setPokemon ] = useState([]);

    //va s'executer seulement au lancement du composant (dep: [])
    useEffect(() => {
        // récupérer la liste des users seulement au chargement du composant ! 
        const PokemonFetched = getAll();
        PokemonFetched
        .then(result => setPokemon(result))
        .catch(error=>console.error("Erreur avec notre API :",error.message));
    },[]);

    return <>
        <Nav />
        <FirstTitle />
        <div className="pokemon-list">
            <div class="flex">
            {
                Pokemon.map((pokemon,key) =>{
                    return <div key={key} className="bloc-pokemon">
                    <h2>{Pokemon.list}</h2>
                </div>
                })
            }
            </div>
        </div>
    </>;
    }

export default Home;