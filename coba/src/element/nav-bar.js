
class NaviBar extends HTMLElement {
	connectedCallback(){
		this.render();
	}

	set keyupEvent(event) {
		this._keyupEvent = event;
		this.render();
	}

	get value(){
		return this.querySelector("#search").value;
	}

	render(){
		this.innerHTML = `
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
		  <a class="navbar-brand" href="#">
		  <img src="https://icons.iconarchive.com/icons/pelfusion/long-shadow-ios7/512/News-icon.png" width="30" height="30" class="d-inline-block align-top" alt="">
		  Newsindo
		  </a>
		  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		    <span class="navbar-toggler-icon"></span>
		  </button>

		  <div class="collapse navbar-collapse" id="navbarSupportedContent">
		    <ul class="navbar-nav mr-auto">
		    	<input class="form-control m-1 mt-2 search" id="search" type="search" placeholder="Search news. . ." aria-label="Search">
		    </ul>
		    <form class="form-inline my-1 my-lg-0">
		      	<div class="button-header">
			      <button type="button" class="btn btn-outline-secondary m-1" data-toggle="modal" data-target="#exampleModalCenter">
					  My Account
					</button>
				</div>
		    </form>
		  </div>
		</nav>`;

    	this.querySelector("#search").addEventListener("keyup", this._keyupEvent);
	}
}

customElements.define("nav-bar", NaviBar);