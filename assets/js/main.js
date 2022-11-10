function convertPokemonToLi(pokemon) {
    return `
                <li class="pokemon ${pokemon.tipo_principal}">
                    <span class="number">#${pokemon.numero}</span>
                    <span class="name">${pokemon.nome}</span>

                    <div class="detail">
                        <ol class="types">
                            ${pokemon.tipos.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                        </ol>
                        <img src="${pokemon.imagem}"
                            alt="${pokemon.nome}">
                    </div>
                </li>
            `
}

const pokemonList = document.getElementById('pokemonList')

pokeApi.getPokemon().then((pokemons = []) => {
    pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('')
})
