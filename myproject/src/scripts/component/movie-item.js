class MovieItem extends HTMLElement {

   set club(club) {
       this._movie = movie;
       this.render();
   }
 
   render() {
      this.innerHTML = `
          <div class="col-sm-6">
            <div class="card mb-3" style="max-width: 540px;">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img src="https://miro.medium.com/max/800/1*iz0bWc2uWg4AEerV0iCZzQ.png" class="card-img img-fluid" alt="...">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      <button class="badge badge-warning">
                    Update
                  </button>

                      <button class="badge badge-danger">
                    Delete
                  </button>
                  </div>
                </div>
              </div>
            </div>  
          </div>`
   }
}

customElements.define("movie-item", MovieItem);