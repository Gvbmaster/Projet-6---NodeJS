export const updatePokemon = async (data) => {
    const response = await fetch(
        'http://localhost:4444/pokemon/updatePokemon', {
            method: 'POST', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            }, 
            body: JSON.stringify(data),
        }
    )
    const res = await response.json()
    return res

}