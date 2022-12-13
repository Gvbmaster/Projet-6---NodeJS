export const getInPokemon = async (data) => {
    const response = await fetch(
        'http://localhost:4444/pokemon/insert', {
            method: 'POST', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        }
    )
    const pokemon = await response.json()
    return pokemon
}