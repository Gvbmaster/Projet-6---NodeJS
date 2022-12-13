export const AllType = async () => {
    const response = await fetch(
        'http://localhost:4444/pokemon/listType', {
            method: 'GET', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            }
        }
    )
    const Type = await response.json()
    return Type
}