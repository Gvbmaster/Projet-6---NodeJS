import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from "react";
import { getAll } from "../api/Pokemon";
import {updatePokemon} from "../api/UpdatePokemon";
import { AllType } from "../api/Type";
import {useForm} from "react-hook-form";



function Update(props){
    const [ pokemon, setPokemon ] = useState([]);
    const [ types, setTypes ] = useState([]);
    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        const res = await updatePokemon(data);
        if(res.acknowledged){
            console.log(data)
        }
    }
    
    useEffect(() => {
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
    
    <div className='pokemon-list'>
        <h1>Modifier le pokemon</h1>
        <Form onSubmit={handleSubmit(onSubmit)}>
                        <div className="espace">
                            <div className="c">
                                <div className="pokemonCard">
                                    <div className="id">
                                    <input type="hidden" {...register("_id")} defaultValue={pokemon._id} />
                                    </div>
                                    <div className="name">
                                        <input {...register("name")} placeholder="Nom du pokemon" defaultValue={pokemon.name}></input>
                                    </div>
                                    <div className="image">
                                        <input {...register("img")} placeholder="Url de l'image" defaultValue={pokemon.img}></input>
                                    </div>
                                    <div className="type"><select multiple {...register("type[]")} defaultValue={pokemon.type}>
                                        {
                                            types.map(type=><option value={type.type}>{type.type}</option>) 
                                        }
                                        </select>
                                    </div>
                                </div>
                            </div>
                                <div className="bouton">
                                    <Button type="submit">Accepter</Button>
                                </div>
                        </div>
            </Form>
    </div>;
    
    </>
}
export default Update;