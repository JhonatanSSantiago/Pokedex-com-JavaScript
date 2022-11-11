const pokemonList = document.getElementById('pokemonList');
const bProxima = document.getElementById('proxima');
const bRetornar = document.getElementById('anterior');
const limit = 12;
let offset = 0;


function goToPage(offset, limit){

    
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
                            <span class="status">height: ${pokemon.alt}</span>
                            <span class="status">weight: ${pokemon.peso}</span>
                        </li>
                    `
        }

    pokeApi.getPokemon(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML = newHtml
        
    })
}

goToPage(offset, limit);

bProxima.addEventListener('click', () => {
    offset += limit;
    goToPage(offset, limit);
})

bRetornar.addEventListener('click', () => {
    if(offset <= 0){
        offset = 0;
    }else{
        offset -= limit
        goToPage(offset, limit);
    }
   
})

