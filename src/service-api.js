const BASE_URL = 'https://newsapi.org/v2/everything'
const API_KEY = '32095513d9f14c72b811073e513b0333'

const options = {
  headers:{
    'Authorization': API_KEY
  }
}

export class NewsApiService{
    constructor(){
        this.page = 1;
        this.searchQuery = '';
    }

    searchArticles = query =>{
        return fetch(`${BASE_URL}?q=${this.searchQuery}&apiKey=${API_KEY}&pagesSize=20&page=${this.page}, options`)
        .then(response=> response.json())
        .then(res=> res.articles)
      }

}

