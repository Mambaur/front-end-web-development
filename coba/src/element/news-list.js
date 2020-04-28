import './news-item.js';

class NewsList extends HTMLElement {

	set news(news) {
		this._news = news;
		this.render();
	}

	render() {
		this.innerHTML = "";
		this.setAttribute("class", "col-sm-10");
		const div = document.createElement("div");
		div.setAttribute("class", "row pl-3");
		this.appendChild(div);

		this._news.forEach(news=>{
			const newsItemElement = document.createElement("news-item");
			newsItemElement.news = news;
			div.appendChild(newsItemElement);
		});
	}

	renderError(message){
		this.innerHTML = "";
		this.innerHTML += `<h2 class="text-danger">${message}</h2>`;
	}
}

customElements.define("news-list", NewsList);