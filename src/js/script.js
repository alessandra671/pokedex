const listaSelecaoPokemons = document.querySelector('.pokemon')
const pokemonsCard = document.querySelector('.pokemon-card')

listaSelecaoPokemons.addEventListener.forEach(pokemon => {
    
    pokemon.addEventListener('click', () => {
        const cartaoPokemonAberto = document.querySelector('.open')
        cartaoPokemonAberto.classList.remove('.open')

        const idPokemonSelecionado = pokemon.attributes.id.value
    })
});