import '../element/news-list.js';
import '../element/nav-bar.js';

const main = () => {
    const newsListElement = document.querySelector("news-List");
    const baseUrl = "http://api.tvmaze.com/search/shows?q=";
    const navbar = document.querySelector("nav-bar");

    const getNews = ()=>{
        fetch(`http://newsapi.org/v2/top-headlines?country=id&apiKey=d27ee1d140904792a711476bae95732e`)
         .then(response => {
            return response.json();
         })
         .then(responseJson => {
            newsListElement.news = responseJson.articles;
         })
         .catch(error => {
             newsListElement.renderError(error);
         })
    };

    const search = ()=>{
        if (navbar.value) {
        fetch(`https://newsapi.org/v2/everything?q=${navbar.value}&apiKey=d27ee1d140904792a711476bae95732e`)
         .then(response => {
            return response.json();
         })
         .then(responseJson => {
            newsListElement.news = responseJson.articles;
         })
         .catch(error => {
             newsListElement.renderError(error);
         })
        }
        else{
            getNews();
        }
    };

    const getCategory = (key)=>{
        fetch(`http://newsapi.org/v2/top-headlines?country=id&category=${key}&apiKey=d27ee1d140904792a711476bae95732e`)
         .then(response => {
            return response.json();
         })
         .then(responseJson => {
            newsListElement.news = responseJson.articles;
         })
         .catch(error => {
             newsListElement.renderError(error);
         })
    }
    
    
    getNews();
    navbar.keyupEvent = search;
    document.querySelector(".business").addEventListener("click", event=>{
      event.preventDefault();
      getCategory('business');
    });

    document.querySelector(".entertainment").addEventListener("click", event=>{
      event.preventDefault();
      getCategory('entertainment');
    });

    document.querySelector(".health").addEventListener("click", event=>{
      event.preventDefault();
      getCategory('health');
    });

    document.querySelector(".top").addEventListener("click", event=>{
      event.preventDefault();
      getNews();
    });

    document.querySelector(".tech").addEventListener("click", event=>{
      event.preventDefault();
      getCategory('technology');
    });

    document.querySelector(".science").addEventListener("click", event=>{
      event.preventDefault();
      getCategory('science');
    });

    document.querySelector(".sports").addEventListener("click", event=>{
      event.preventDefault();
      getCategory('sports');
    });
};

export default main;