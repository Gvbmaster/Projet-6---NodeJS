import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from "react";
import { getAll } from "../api/Pokemon";
import {deletePokemon} from "../api/DeletePokemon";
import {updatePokemon} from "../api/UpdatePokemon";
import { AllType } from "../api/Type";
import {getInPokemon} from "../api/AddPokemon";
import {useForm} from "react-hook-form";
import { Link } from "react-router-dom";
import FormLabel from 'react-bootstrap/esm/FormLabel';



function Update(props){
    const [pokemon ,setUpdate ] = useState([]);
    useEffect(() => {
    const updateFetched = updatePokemon(pokemon);
    updateFetched
      .then(result => setUpdate(result))
      .catch(error=>console.error("Erreur avec notre API :",error.message));
    },[]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        await getInPokemon(data);
            console.log(data);
    }
    const [pokemons, setPokemon ] = useState([]);
    const [ types, setTypes ] = useState([]);
    const pokemonFetched = getAll();
    pokemonFetched
        .then(result => setPokemon(result))
        .catch(error=>console.error("Erreur avec notre API :",error.message));
    const typesFetched = AllType();
    typesFetched
        .then(result => setTypes(result))
        .catch(error=>console.error("Erreur avec notre API :",error.message));
    return <>
    
    <div className='form'>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>{pokemon.name}</Form.Label>
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
        </div>;
    
    </>
}
export default Update;