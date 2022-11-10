const pokeApi = {}

function convertPokeApiToDetailPokemon(PokeDetails){
    const pokemon = new Pokemon();
    pokemon.numero = PokeDetails.order;
    pokemon.nome = PokeDetails.name;
    pokemon.imagem = PokeDetails.sprites.other.dream_world.front_default;
    const types = PokeDetails.types.map((typesSlot) => typesSlot.type.name);
    const [tipo1] = types;
    pokemon.tipos = types;
    pokemon.tipo_principal = tipo1;

    return pokemon;
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertPokeApiToDetailPokemon)
}

pokeApi.getPokemon = (offse, limit) => {
    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit})`
    //solicitando e recebendo requisição
    return fetch(url)
            .then((response) => response.json()) //transforma em json
            .then((jsonBody) => jsonBody.results) //pega a lista de pokemon do result
            .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail)) // lista de requsições dos detalhes do pkeomon
            .then((detailsRequest) => Promise.all(detailsRequest)) //agurando todas as requisições de detalhes
            .then((pokemonDetails) => pokemonDetails) //retornando os detalhes
}