import Nav from "../component/Nav"
import FirstTitle from "../component/h1"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
                return  <Container fluid>
                <Row>
                <div key={key} className="bloc-pokemon justify-content-md-center">
                    <Col sm="auto">
                        <h2>{pokemon.name}</h2>
                    </Col>
                    <Col sm="auto">    
                        <img src={pokemon.img} alt=""/>
                    </Col>
                    <Col sm={10}> 
                        <p>{pokemon.type}</p>
                    </Col>
                    <Col sm="auto">
                        <button onClick={()=>getInPokedex(pokemon)}>Capturer !</button>
                    </Col>
            </div>
                </Row>
              </Container>
            })
        }
        </div>
    </div>;

    </>

}


export default Pokemon;