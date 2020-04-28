
function main() {
    const baseUrl = "http://api.tvmaze.com/";

    const getBook = () => {

        //Menggunakan fetch promise
        fetch(`${baseUrl}search/shows?q=girls`)
         .then(response => {
             return response.json();
         })
         .then(responseJson => {
            if(responseJson.error) {
                showResponseMessage(responseJson.message);
            } else {
                renderAllBooks(responseJson.showMovie);
            }
         })
         .catch(error => {
             showResponseMessage(error);
         })
    };



    const renderAllBooks = (showMovie) => {
        const listBookElement = document.querySelector("#movie-list");
        listBookElement.innerHTML = "";

        showMovie.forEach(showMovie=> {
            listBookElement.innerHTML += `
            	<div class="col-sm-6">
					<div class="card mb-3" style="max-width: 540px;">
						<div class="row no-gutters">
						    <div class="col-md-4">
						      <img src="https://miro.medium.com/max/800/1*iz0bWc2uWg4AEerV0iCZzQ.png" class="card-img img-fluid" alt="...">
						    </div>
						    <div class="col-md-8">
						     	<div class="card-body">
							        <h5 class="card-title">${showMovie.name}</h5>
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
				</div>
            `;
        });

        const buttons = document.querySelectorAll(".button-delete");
        buttons.forEach(button => {
            button.addEventListener("click", event => {
                const bookId = event.target.id;
                removeBook(bookId);
            })
        })
    };

    const showResponseMessage = (message = "Check your internet connection") => {
        alert(message);
    };

    document.addEventListener("DOMContentLoaded", () => {

        getBook();
    });
}

export default main;
