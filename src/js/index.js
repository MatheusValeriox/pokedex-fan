/*
quando clicar no pokemon da listagem temos que esconder o cartao do pokemon
aberto e mostrar o cartao correspondente ao que foi selecionado na listagem tem

para isso vamos precisar trabalhar com dois elmentos 
1- listagem
2- cartao do pokemon

precisamos criar duas variaveis no js para trabalhar com os elementos
da tela

- remover a classe aberto só do cartao que esteja aberto 
- ao clicar em um pokemon da listagem pegamos o id do pokemon 
para saber qual o cartao mostrar 
- remover a classe ativa que marca o pkemon selecionado
*/

//precisamos criar duas variaveis no js para trabalhar com os elementos da tela
const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemons.forEach(pokemon => {
   //vamos precisar trabalhar com um evento de clique feito pelo usuário na listagem de pokémons

   pokemon.addEventListener('click', () => {
      //- remover a classe aberto só do cartao que esteja aberto 
      const cartaoPokemonAberto = document.querySelector('.aberto')
      cartaoPokemonAberto.classList.remove('aberto')

      //- ao clicar em um pokemon da listagem pegamos o id do pokemon 
      //para saber qual o cartao mostrar 
      const idPokemonSelecionado = pokemon.attributes.id.value
      const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
      const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
      cartaoPokemonParaAbrir.classList.add('aberto')

      //remover a classe ativa que marca o pkemon selecionado
      const pokemonAtivoNaListagem = document.querySelector('.ativo')
      pokemonAtivoNaListagem.classList.remove('ativo')

      //adicionar a classe ativo no item da lista selecionado 
      const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
      pokemonSelecionadoNaListagem.classList.add('ativo')
   })
})