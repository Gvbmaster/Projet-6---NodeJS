export const getAllPokedex = async () => {
    const response = await fetch(
        'http://localhost:4444/pokemon/listPokedex', {
            method: 'GET', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            }
        }
    )
    const pokemon = await response.json()
    return pokemon
}