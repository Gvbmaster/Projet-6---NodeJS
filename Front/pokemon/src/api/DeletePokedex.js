export const deletePokedex = async (pokemon) => {
    const response = await fetch(
        'http://localhost:4444/pokemon/deletePokedex', {
            method: 'POST', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            },
            body: JSON.stringify(pokemon)
        }
    )
    const pokemons = await response.json()
    return pokemons
}