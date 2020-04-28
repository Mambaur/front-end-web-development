class NewsItem extends HTMLElement {

   set news(news) {
       this._news = news;
       this.render();
   }
 
   render() {
      this.setAttribute("class", "col-sm-6 p-1");
      this.innerHTML = `
            <div class="card mb-3" style="max-width: 540px;">
              <div class="row no-gutters">
                  <div class="col-md-5">
                    <img src="${this._news.urlToImage}" class="thumb-post" alt="...">
                  </div>
                  <div class="col-md-7">
                    <div class="card-body">
                        <h5 class="card-title">${this._news.title.substr(0,50)}..</h5>
                        <p class="card-text">${this._news.publishedAt}<br>
                        </p>
                        
                          
                    </div>
                  </div>
              </div>
            </div>`;
   }
}

customElements.define("news-item", NewsItem);