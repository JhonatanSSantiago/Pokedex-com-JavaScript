const pokeApi = {}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url).then((response) => response.json())
}

pokeApi.getPokemon = (offset = 0, limit = 12) => {
    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit})`
    //solicitando e recebendo requisição
    return fetch(url)
            .then((response) => response.json()) //transforma em json
            .then((jsonBody) => jsonBody.results) //pega a lista de pokemon do result
            .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail)) // lista de requsições dos detalhes do pkeomon
            .then((detailsRequest) => Promise.all(detailsRequest)) //agurando todas as requisições de detalhes
            .then((pokemonDetails) => pokemonDetails) //retornando os detalhes
}