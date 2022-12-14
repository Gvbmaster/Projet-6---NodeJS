import Nav from "../component/Nav"
import FirstTitle from "../component/h1-2"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useEffect, useState } from "react";
import { getAll } from "../api/Pokemon";
import {deletePokemon} from "../api/DeletePokemon";
import {updatePokemon} from "../api/UpdatePokemon";
import { AllType } from "../api/Type";
import {getInPokemon} from "../api/AddPokemon";
import {useForm} from "react-hook-form";
import { Link } from "react-router-dom";


function About(props){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        await getInPokemon(data);
            console.log(data);
    }
    //va s'executer seulement au lancement du composant (dep: [])
    const [ pokemon, setPokemon ] = useState([]);
    const [ types, setTypes ] = useState([]);
    
    useEffect(() => {
      // récupérer la liste des pokemons seulement au chargement du composant ! 
    const pokemonFetched = getAll();
    pokemonFetched
        .then(result => setPokemon(result))
        .catch(error=>console.error("Erreur avec notre API :",error.message));
    const typesFetched = AllType();
    typesFetched
        .then(result => setTypes(result))
        .catch(error=>console.error("Erreur avec notre API :",error.message));
    
      

    },[]);
    return <>
    <Nav/>
    <FirstTitle/>
    <Button variant="primary" onClick={handleShow}>
       Ajouter un pokemon
    </Button>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Créer un pokemon</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label><input {...register("name")} placeholder="Entrer le nom du pokemon" /></Form.Label>
            </Form.Group>
              <Form.Label><input {...register("img")} placeholder="Entrer l'url de l'image du pokemon'" /></Form.Label>
            <Form.Select  {...register("type[]")} aria-label="Default select example"multiple>
                {
                    types.map(type=><option value={type.type}>{type.type}</option>)
                }
            </Form.Select>
          <Button variant="primary" type="submit"> Ajouter un pokemon</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Annuler</Button>
        </Modal.Footer>
      </Modal>
    <div className="pokemon-list">
        <h1>Liste des pokemons</h1>
        <div className="flex">
        {
            pokemon.map((pokemon,key) =>{
                return <div key={key} className="bloc-pokemon">
                    <img src={pokemon.img} alt=""/>
                    <h2>{pokemon.name}</h2>
                    <p>{pokemon.type}</p>
                    <Link to={"/Update/"+pokemon._id}><button onClick={()=>updatePokemon(pokemon)}>Modifier !</button></Link>
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