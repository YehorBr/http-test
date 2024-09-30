// 111111111111111111111111111111111111111111111111111111111111111111111111

// const refs = {
//     form: document.querySelector('.js-search-form'),
//     container: document.querySelector('.js-card-container'),
//     btn: document.querySelector('.js-search-btn'),
//     search: document.querySelector('.js-search')
//   }


//   refs.btn.addEventListener('click', ()=>{
//     console.log(refs.search.value);
//     fetchPokemonById(refs.search.value)
//     .then(pokemon =>{
//         const pokemonCard = 
//         `<div class="card">
//   <div class="card-img-top">
//     <img src="${pokemon.sprites.front_default}" alt="">
//   </div>
//   <div class="card-body">
//     <h2 class="card-title">Ім'я:${pokemon.name}</h2>
//     <p class="card-text">Вага: ${pokemon.weight}</p>
//     <p class="card-text">Зріст: ${pokemon.height} </p>

//     <p class="card-text"><b>Вміння</b></p>
//     <ul class="list-group"></ul>   
//       <li class="list-group-item"></li>    
//     </ul>
//   </div>
// </div>`

//         refs.container.innerHTML = pokemonCard;
//     })

    
//   })

// function fetchPokemonById(pokemonId){
//     return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
//     .then(res => res.json())
// }




// // refs.form.addEventListener('submit', onFormSubmit)

// // function onFormSubmit(event){
// //     console.log(value);
// //     event.preventDefault()
// //     const form = event.currentTarget
// //     const value = form.elements.query.value

// //     fetchPokemonById(value)

// //     event.reset
// // }

    


// // let newPokemon;
// // fetchPokemonById(10)
// //     .then(pokemon =>{
// //         document.body.textContent = pokemon.name
// //     })








// 222222222222222222222222222222222222222222222222222222222222222222










/* <li>
    <a href="" target="_blank" rel="noopener noreferrer">
      <article>
        <img src="" alt="" width="480">
        <h2></h2>
        <p>Posted by: </p>
        <p></p>
      </article>
    </a>
  </li> */

  import { NewsApiService } from "./service-api";

const formRef = document.querySelector('.js-search-form');
const articlesContainerRef = document.querySelector('.js-articles-container');
const loadMoreBtnRef = document.querySelector('[data-action="load-more"]')

const newsApiService = new NewsApiService()

loadMoreBtnRef.addEventListener('click', onLoadMore);
formRef.addEventListener('submit', onSearch)

function createArticleCards(articles){
  return articles.map(article=>{
    return `<li>
    <a href="${article.url}" target="_blank" rel="noopener noreferrer">
      <article>
        <img src="${article.urlToImage}" alt="" width="480">
        <h2>${article.title}</h2>
        <p>Posted by: ${article.author}</p>
        <p>${article.description}</p>
      </article>
    </a>
  </li>`
  })
}

function onSearch(event){
  event.preventDefault()
  const form = event.currentTarget
  newsApiService.searchQuery = form.elements.query.value
  newsApiService.searchArticles(searchQuery)
  .then(articles =>{
    const markUp = createArticleCards(articles)
    articlesContainerRef.insertAdjacentHTML('beforeend', markUp)

    newsApiService.page += 1

})
  form.reset() 
}



function onLoadMore(){
  newsApiService.searchArticles(searchQuery)
  .then(articles =>{
    const markUp = createArticleCards(articles)
    articlesContainerRef.insertAdjacentHTML('beforeend', markUp)

    newsApiService.page += 1

})
}
