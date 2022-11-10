const pokeApi = {}

pokeApi.getPokemon = (offset = 0, limit = 20) => {
    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit})`
    //solicitando e recebendo requisição
    return fetch(url)
            .then((response) => response.json()) //transforma em json
            .then((jsonBody) => jsonBody.results)
            .catch((error) => console.log(error))
}