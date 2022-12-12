export const updatePokemon = async () => {
    const response = await fetch(
        'http://localhost:4444/pokemon/update', {
            method: 'POST', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            }
        }
    )
    const pokemon = await response.json()
    return pokemon
}