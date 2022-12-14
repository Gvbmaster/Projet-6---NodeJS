export const getAll = async (data) => {
    const response = await fetch(
        'http://localhost:4444/pokemon/list', {
            method: 'GET', 
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
